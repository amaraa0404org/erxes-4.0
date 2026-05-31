import './load-env';
import './sentry-instrument';
import * as Sentry from '@sentry/node';
import * as dotenv from 'dotenv';

import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as http from 'http';
import rateLimit, { type RateLimitRequestHandler } from 'express-rate-limit';
import { Queue } from 'bullmq';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { retryGetProxyTargets } from '~/proxy/targets';
import { startRouter, stopRouter } from '~/apollo-router';
import userMiddleware from '~/middlewares/userMiddleware';
import { initMQWorkers } from '~/mq/workers/workers';
import {
  applyProxiesCoreless,
  applyProxyToCore,
  proxyReq,
} from '~/proxy/middleware';

import {
  applyTrustProxy,
  getPlugin,
  getPlugins,
  getSubdomain,
  isDev,
  redis,
  setActivePlugins,
} from 'erxes-api-shared/utils';
import { generateModels } from '~/connectionResolver';
import { applyGraphqlLimiters } from '~/middlewares/graphql-limiter';
import {
  startSubscriptionServer,
  stopSubscriptionServer,
} from './subscription';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const portInternal = process.env.PORT ? Number(process.env.PORT) : 4000;
const portExternal = process.env.PORT_EXTERNAL ? Number(process.env.PORT_EXTERNAL) : 4001;

const { DOMAIN, WIDGETS_DOMAIN, ALLOWED_ORIGINS, ALLOWED_DOMAINS } =
  process.env;

const corsOptions = {
  credentials: true,
  origin: [
    DOMAIN ? DOMAIN : 'http://localhost:3000',
    WIDGETS_DOMAIN ? WIDGETS_DOMAIN : 'http://localhost:3200',
    ...(ALLOWED_DOMAINS || '').split(','),
    'https://studio.apollographql.com',
    ...(ALLOWED_ORIGINS || '').split(',').map((c) => c && RegExp(c)),

    ...(isDev
      ? [
          'http://localhost:3001',
          'http://localhost:5173',
          'http://localhost:4200',
        ]
      : []),
  ],
};

const myQueue = new Queue('gateway-service-discovery', {
  connection: redis as any,
  defaultJobOptions: {
    removeOnComplete: false,
  },
});

const serverAdapter = new ExpressAdapter();

createBullBoard({
  queues: [new BullMQAdapter(myQueue)],
  serverAdapter: serverAdapter,
});

serverAdapter.setBasePath('/bullmq-board');

Sentry.getGlobalScope().setTags({
  plugin: 'gateway',
  service: 'gateway',
});

// Configure Rate Limiter
const gatewayRateLimiter: RateLimitRequestHandler = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5000,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.path === '/health' || req.path.startsWith('/bullmq-board'),
});

const setupExpressApp = (app: Express, isInternal: boolean) => {
  applyTrustProxy(app);
  app.use(cookieParser());
  app.use(gatewayRateLimiter);

  app.use(async (req, res, next) => {
    const appToken = req.headers['x-app-api-token'] as string;

    if (appToken) {
      try {
        const subdomain = getSubdomain(req);
        const cacheKey = `app_token:${subdomain}:${appToken}`;

        let isValid = await redis.get(cacheKey);

        if (isValid === null) {
          const models = await generateModels(subdomain);
          const appInDb = await models.Apps.findOne({
            token: appToken,
            status: 'active',
          });
          isValid = appInDb ? '1' : '0';
          await redis.set(cacheKey, isValid, 'EX', 3600);
        }

        if (isValid === '1') {
          return cors({ credentials: true, origin: true })(req, res, next);
        }
      } catch {
        // Fall through
      }
    }

    return cors(corsOptions)(req, res, next);
  });

  app.use(userMiddleware);

  if (isInternal) {
    app.use('/bullmq-board', serverAdapter.getRouter());
  }

  app.get('/health', async (_req, res) => {
    res.end('ok');
  });

  app.get('/locales/:lng/:file', async (req, res) => {
    const localesRoot = path.join(__dirname, './locales');
    try {
      const requestedPath = path.resolve(
        localesRoot,
        req.params.lng,
        req.params.file,
      );
      const realPath = fs.realpathSync(requestedPath);
      if (!realPath.startsWith(localesRoot + path.sep)) {
        return res.status(403).send('Forbidden');
      }
      const lngJson = fs.readFileSync(realPath);
      res.json(JSON.parse(lngJson.toString()));
    } catch {
      res.status(500).send('Error fetching locale');
    }
  });

  app.use('/pl:serviceName', async (req, res) => {
    try {
      const serviceName: string = req.params.serviceName.replace(':', '');
      const service = await getPlugin(serviceName);
      const targetUrl = service.address;

      if (targetUrl) {
        return createProxyMiddleware({
          target: targetUrl,
          changeOrigin: true,
          on: {
            proxyReq,
          },
          pathRewrite: {
            [`^/pl:${serviceName}`]: '/',
          },
        })(req, res);
      } else {
        res.status(404).send('Service not found');
      }
    } catch {
      res.status(500).send('Error fetching services');
    }
  });
};

const appInternal = express();
setupExpressApp(appInternal, true);

const appExternal = express();
setupExpressApp(appExternal, false);

let httpServerInternal: http.Server;
let httpServerExternal: http.Server;

async function start() {
  try {
    const enabledPlugins = await getPlugins();
    await setActivePlugins(enabledPlugins);

    global.currentTargets = await retryGetProxyTargets();

    console.log('Initializing MQ workers...');
    await initMQWorkers(redis);
    console.log('MQ workers initialized');

    console.log('Starting internal and external routers...');
    await startRouter('internal', global.currentTargets);
    await startRouter('external', global.currentTargets);
    console.log('Routers started successfully');

    // Apply internal gateway proxies (Port 4000)
    applyGraphqlLimiters(appInternal);
    applyProxiesCoreless(appInternal, 50000);
    applyProxyToCore(appInternal, global.currentTargets);
    Sentry.setupExpressErrorHandler(appInternal);

    // Apply external gateway proxies (Port 4001)
    applyProxiesCoreless(appExternal, 50001);
    Sentry.setupExpressErrorHandler(appExternal);

    // Start HTTP Servers
    httpServerInternal = http.createServer(appInternal);
    await new Promise<void>((resolve) =>
      httpServerInternal.listen({ port: portInternal }, resolve),
    );
    console.log(`Internal Gateway is running at http://localhost:${portInternal}/`);

    httpServerExternal = http.createServer(appExternal);
    await new Promise<void>((resolve) =>
      httpServerExternal.listen({ port: portExternal }, resolve),
    );
    console.log(`External Gateway is running at http://localhost:${portExternal}/`);

    await startSubscriptionServer(httpServerInternal);
  } catch (error) {
    console.error('Error starting the servers:', error);
    process.exit(1);
  }
}

// Graceful shutdown
(['SIGINT', 'SIGTERM'] as NodeJS.Signals[]).forEach((signal) => {
  process.on(signal, async () => {
    console.log(`Exiting on signal ${signal}`);

    try {
      stopRouter('internal', signal);
      stopRouter('external', signal);
      await stopSubscriptionServer();

      if (httpServerInternal) {
        await new Promise((resolve) => httpServerInternal.close(resolve));
      }
      if (httpServerExternal) {
        await new Promise((resolve) => httpServerExternal.close(resolve));
      }
      process.exit(0);
    } catch (error) {
      console.error('Error during shutdown:', error);
      process.exit(1);
    }
  });
});

start();
