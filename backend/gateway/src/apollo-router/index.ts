import * as dotenv from 'dotenv';

import { spawn, ChildProcess, execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'yaml';
import * as net from 'net';
import {
  dirTempPath,
  getRouterConfigPath,
  routerPath,
  getSupergraphPath,
} from '~/apollo-router/paths';
import supergraphCompose from '~/apollo-router/supergraph-compose';

dotenv.config();

const { NODE_ENV, INTROSPECTION } = process.env;

let routerProcesses: { internal?: ChildProcess; external?: ChildProcess } = {};
let hasRouterStarted = { internal: false, external: false };
let isIntentionalRouterStop = { internal: false, external: false };
const intentionallyStoppedRouters = new WeakSet<ChildProcess>();
let routerRecoverTimers: { internal?: NodeJS.Timeout; external?: NodeJS.Timeout } = {};
let routerRecoverAttempts = { internal: 0, external: 0 };

export const getApolloRouterPort = (scope: 'internal' | 'external') => {
  if (scope === 'internal') {
    return Number(process.env.APOLLO_ROUTER_PORT) || 50000;
  }
  return Number(process.env.APOLLO_ROUTER_PORT_EXTERNAL) || 50001;
};

export const apolloRouterPort = getApolloRouterPort('internal');

const waitForRouterReady = async (scope: 'internal' | 'external', timeoutMs = 15_000) => {
  const startedAt = Date.now();
  const port = getApolloRouterPort(scope);

  while (Date.now() - startedAt < timeoutMs) {
    const proc = routerProcesses[scope];
    if (!proc || proc.exitCode !== null) {
      throw new Error(`Apollo Router [${scope}] exited before it became ready`);
    }

    const isReady = await new Promise<boolean>((resolve) => {
      const socket = net.createConnection({
        host: '127.0.0.1',
        port,
      });

      socket.once('connect', () => {
        socket.destroy();
        resolve(true);
      });

      socket.once('error', () => {
        socket.destroy();
        resolve(false);
      });

      socket.setTimeout(500, () => {
        socket.destroy();
        resolve(false);
      });
    });

    if (isReady) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Apollo Router [${scope}] did not become ready in time`);
};

const scheduleRouterRecovery = (scope: 'internal' | 'external') => {
  if (!hasRouterStarted[scope] || routerRecoverTimers[scope]) {
    return;
  }

  const targets = global.currentTargets;
  if (!targets?.length) {
    return;
  }

  routerRecoverAttempts[scope] += 1;
  const delayMs = Math.min(30_000, 1000 * routerRecoverAttempts[scope]);

  routerRecoverTimers[scope] = setTimeout(async () => {
    routerRecoverTimers[scope] = undefined;

    try {
      console.error(`Attempting to recover Apollo Router [${scope}]...`);
      await restartRouter(scope, targets);
      routerRecoverAttempts[scope] = 0;
    } catch (e) {
      console.error(e);
      scheduleRouterRecovery(scope);
    }
  }, delayMs);
};

const waitForRouterExit = async (scope: 'internal' | 'external', signal: NodeJS.Signals) => {
  const proc = routerProcesses[scope];
  if (!proc) {
    return;
  }

  let didExit = false;

  isIntentionalRouterStop[scope] = true;
  intentionallyStoppedRouters.add(proc);

  await new Promise<void>((resolve) => {
    const timeout = setTimeout(resolve, 5000);

    proc.once('exit', () => {
      didExit = true;
      clearTimeout(timeout);
      resolve();
    });

    try {
      proc.kill(signal);
    } catch (e) {
      clearTimeout(timeout);
      console.error(e);
      resolve();
    }
  });

  if (!didExit && proc.exitCode === null) {
    try {
      proc.kill('SIGKILL');
    } catch (e) {
      console.error(e);
    }
  }

  isIntentionalRouterStop[scope] = false;

  if (routerProcesses[scope] === proc) {
    routerProcesses[scope] = undefined;
  }
};

export const stopRouter = (scope: 'internal' | 'external', signal: NodeJS.Signals) => {
  const proc = routerProcesses[scope];
  if (!proc) {
    return;
  }
  try {
    intentionallyStoppedRouters.add(proc);
    isIntentionalRouterStop[scope] = true;
    proc.kill(signal);
  } catch (e) {
    console.error(e);
  }
};

const downloadRouter = async () => {
  if (NODE_ENV === 'production') {
    return;
  }
  if (fs.existsSync(routerPath)) {
    return routerPath;
  }

  const version = 'v1.59.2';
  const downloadCommand = `(export VERSION=${version}; curl -sSL https://router.apollo.dev/download/nix/${version} | sh)`;
  try {
    execSync(`cd ${dirTempPath} && ${downloadCommand}`);
  } catch (e) {
    console.error(
      `Could not download apollo router. Run \`${downloadCommand}\` inside ${dirTempPath} manually`,
    );
    throw e;
  }
};

const createRouterConfig = async (scope: 'internal' | 'external') => {
  const configPath = getRouterConfigPath(scope);
  const port = getApolloRouterPort(scope);

  if (NODE_ENV === 'production' && fs.existsSync(configPath)) {
    return;
  }

  const config: any = {
    traffic_shaping: {
      all: {
        timeout: '300s',
      },
      router: {
        timeout: '300s',
      },
    },
    include_subgraph_errors: {
      all: true,
    },
    rhai: {
      scripts: path.resolve(__dirname, 'rhai'),
      main: 'main.rhai',
    },
    cors: {
      allow_credentials: true,
    },
    headers: {
      all: {
        request: [
          {
            propagate: {
              matching: '.*',
            },
          },
        ],
      },
    },
    supergraph: {
      listen: `127.0.0.1:${port}`,
      introspection:
        NODE_ENV === 'development' ||
        (INTROSPECTION || '').trim().toLowerCase() === 'true',
    },
    telemetry: {
      exporters: {
        metrics: {
          prometheus: {
            listen: `127.0.0.1:${port + 1000}`,
          },
        },
      },
    },
    health_check: {
      listen: `127.0.0.1:${port + 2000}`,
    },
  };

  fs.writeFileSync(configPath, yaml.stringify(config));
};

const spawnRouter = (scope: 'internal' | 'external') => {
  const devOptions = ['--dev'];
  const configPath = getRouterConfigPath(scope);
  const schemaPath = getSupergraphPath(scope);

  const spawnedRouter = spawn(
    routerPath,
    [
      ...(NODE_ENV === 'development' ? devOptions : []),
      '--log',
      NODE_ENV === 'development' ? 'warn' : 'error',
      `--supergraph`,
      schemaPath,
      `--config`,
      configPath,
    ],
    { stdio: 'inherit' },
  );

  routerProcesses[scope] = spawnedRouter;

  spawnedRouter.once('exit', (code, signal) => {
    console.error(
      `Apollo Router [${scope}] exited with code=${code ?? 'null'} signal=${
        signal ?? 'null'
      }`,
    );

    if (routerProcesses[scope] === spawnedRouter) {
      routerProcesses[scope] = undefined;
    }

    if (
      !isIntentionalRouterStop[scope] &&
      !intentionallyStoppedRouters.has(spawnedRouter)
    ) {
      scheduleRouterRecovery(scope);
    }
  });
};

export const startRouter = async (scope: 'internal' | 'external', proxy) => {
  await createRouterConfig(scope);
  console.log(`Downloading router...`);
  await downloadRouter();
  await supergraphCompose(scope, proxy);
  console.log(`Creating router config [${scope}]...`);

  spawnRouter(scope);
  await waitForRouterReady(scope);
  hasRouterStarted[scope] = true;
  routerRecoverAttempts[scope] = 0;
};

export const restartRouter = async (scope: 'internal' | 'external', proxy) => {
  console.log(`Restarting Apollo Router [${scope}]...`);

  await supergraphCompose(scope, proxy);

  if (!hasRouterStarted[scope]) {
    console.log(`Apollo Router [${scope}] is not running yet; supergraph refreshed`);
    return;
  }

  await waitForRouterExit(scope, 'SIGTERM');
  spawnRouter(scope);
  await waitForRouterReady(scope);
  routerRecoverAttempts[scope] = 0;
  console.log(`Apollo Router [${scope}] restarted successfully`);
};
