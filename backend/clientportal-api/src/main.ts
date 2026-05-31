import './sentry-instrument';
import * as Sentry from '@sentry/node';
import * as trpcExpress from '@trpc/server/adapters/express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import {
  applyTrustProxy,
  closeMongooose,
  createTRPCContext,
  isDev,
  joinErxesGateway,
  leaveErxesGateway,
} from 'erxes-api-shared/utils';
import express from 'express';
import * as http from 'http';
import * as path from 'path';
import { appRouter } from '~/init-trpc';
import { initApolloServer } from './apollo/apolloServer';
import { generateModels } from './connectionResolvers';

const PLUGIN_NAME = 'clientportal';

Sentry.getGlobalScope().setTags({
  plugin: PLUGIN_NAME,
  service: PLUGIN_NAME,
});

(function loadRootEnv() {
  const fs = require('fs');
  let dir = process.cwd();
  const root = path.parse(dir).root;
  while (dir !== root) {
    const envPath = path.join(dir, '.env');
    if (fs.existsSync(envPath)) {
      dotenv.config({ path: envPath });
      return;
    }
    dir = path.dirname(dir);
  }
  dotenv.config();
})();

const { DOMAIN, ALLOWED_ORIGINS, WIDGETS_DOMAIN, ALLOWED_DOMAINS } =
  process.env;

const port = process.env.PORT ? Number(process.env.PORT) : 3301;

const app = express();
applyTrustProxy(app);

app.use(express.urlencoded({ limit: '15mb', extended: true }));

app.use(
  express.json({
    limit: '15mb',
  }),
);

app.use(cookieParser());

const corsOptions = {
  credentials: true,
  origin: [
    DOMAIN || 'http://localhost:3000',
    WIDGETS_DOMAIN || 'http://localhost:3200',
    ...(isDev ? ['http://localhost:3001', 'http://localhost:4200'] : []),
    ...(ALLOWED_DOMAINS || '').split(','),
    ...(ALLOWED_ORIGINS || '').split(',').map((c) => c && RegExp(c)),
  ],
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext(async (subdomain, context) => {
      const models = await generateModels(subdomain, context);

      context.models = models;

      return context;
    }),
  }),
);

app.get('/health', async (_req, res) => {
  res.end('ok');
});

// ---- Client Portal Translation REST API ----

app.get('/translations/languages', async (_req, res) => {
  try {
    const { prisma } = await import('erxes-api-shared/utils');

    const languages = await prisma.language.findMany({
      where: { isActive: true },
      select: { code: true, name: true },
      orderBy: { code: 'asc' },
    });

    res.set('Cache-Control', 'public, max-age=300');
    res.json(languages);
  } catch (e) {
    console.error('Translation languages error:', e);
    res.status(500).json({ error: 'Failed to fetch languages' });
  }
});

app.get('/translations/:lng/:ns.json', async (req, res) => {
  try {
    const { lng, ns } = req.params;
    const token = req.headers['x-portal-token'] as string;

    const { prisma } = await import('erxes-api-shared/utils');

    let clientPortalId: string | null = null;

    if (token) {
      const portal = await prisma.clientPortal.findUnique({
        where: { token },
        select: { id: true },
      });

      if (portal) {
        clientPortalId = portal.id;
      }
    }

    // Fetch both layers in parallel
    const [portalSpecific, portalDefaults] = await Promise.all([
      clientPortalId
        ? prisma.translation.findMany({
            where: { clientPortalId, namespace: ns, language: lng },
            select: { key: true, value: true },
          })
        : [],
      prisma.translation.findMany({
        where: { clientPortalId: null, namespace: ns, language: lng },
        select: { key: true, value: true },
      }),
    ]);

    // Merge: portal-specific overrides defaults
    const result: Record<string, string> = {};
    for (const entry of portalDefaults) {
      result[entry.key] = entry.value;
    }
    for (const entry of portalSpecific) {
      result[entry.key] = entry.value;
    }

    res.set('Cache-Control', 'public, max-age=300');
    res.json(result);
  } catch (e) {
    console.error('Translation fetch error:', e);
    res.status(500).json({ error: 'Failed to fetch translations' });
  }
});

// Wrap the Express server
const httpServer = http.createServer(app);

httpServer.listen(port, async () => {
  await initApolloServer(app, httpServer);

  Sentry.setupExpressErrorHandler(app);

  await joinErxesGateway({
    name: PLUGIN_NAME,
    port,
    hasSubscriptions: false,
    meta: {},
    scope: 'external',
  });
});

// GRACEFULL SHUTDOWN
process.stdin.resume();

async function leaveServiceDiscovery() {
  try {
    await leaveErxesGateway(PLUGIN_NAME, port);
    console.log('Left from service discovery');
  } catch (e) {
    console.error(e);
  }
}

async function closeHttpServer() {
  try {
    await new Promise<void>((resolve, reject) => {
      httpServer.close((error: Error | undefined) => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    });
  } catch (e) {
    console.error(e);
  }
}

(['SIGINT', 'SIGTERM'] as NodeJS.Signals[]).forEach((sig) => {
  process.on(sig, async () => {
    await closeHttpServer();
    await closeMongooose();
    await leaveServiceDiscovery();
    process.exit(0);
  });
});
