import * as dotenv from 'dotenv';
import * as path from 'path';

import { ErxesProxyTarget } from '~/proxy/targets';
import { getSupergraphConfigPath, getSupergraphPath } from '~/apollo-router/paths';
import * as fs from 'fs';
import { execSync } from 'child_process';
import isSameFile from '~/util/is-same-file';
import * as yaml from 'yaml';

dotenv.config();

const { NODE_ENV, SUPERGRAPH_POLL_INTERVAL_MS } = process.env;

let pollIntervals: { internal?: NodeJS.Timeout; external?: NodeJS.Timeout } = {};

type SupergraphConfig = {
  federation_version: string;
  subgraphs: {
    [name: string]: {
      routing_url: string;
      schema: {
        subgraph_url?: string;
        file?: string;
      };
    };
  };
};

const writeSupergraphConfig = async (
  scope: 'internal' | 'external',
  proxyTargets: ErxesProxyTarget[],
) => {
  const configPath = getSupergraphConfigPath(scope);
  const configNext = configPath + '.next';
  const config: SupergraphConfig = {
    federation_version: '=2.9.3',
    subgraphs: {},
  };

  // Filter proxy targets based on scope
  const filteredTargets = proxyTargets.filter((t) => {
    const s =
      t.config?.scope ||
      (t.name === 'clientportal' ? 'external' : 'internal');
    return s === scope;
  });

  if (filteredTargets.length === 0) {
    console.warn(`No subgraphs found for scope ${scope}, using dummy subgraph`);
    const endpoint = `http://localhost:4000/health`;
    config.subgraphs['dummy'] = {
      routing_url: endpoint,
      schema: {
        file: path.resolve(__dirname, 'dummy', 'subgraph.graphql'),
      },
    };
  } else {
    for (const { name, address } of filteredTargets) {
      const endpoint = `${address}/graphql`;
      config.subgraphs[name] = {
        routing_url: endpoint,
        schema: {
          subgraph_url: endpoint,
        },
      };
    }
  }

  fs.writeFileSync(configNext, yaml.stringify(config), {
    encoding: 'utf-8',
  });

  if (
    !fs.existsSync(configPath) ||
    !isSameFile(configPath, configNext)
  ) {
    fs.cpSync(configNext, configPath, { force: true });
  }
};

const supergraphComposeOnce = async (scope: 'internal' | 'external') => {
  const configPath = getSupergraphConfigPath(scope);
  const schemaPath = getSupergraphPath(scope);

  if (NODE_ENV === 'production') {
    execSync(
      `rover supergraph compose --config ${configPath} --output ${schemaPath} --elv2-license=accept --log=error`,
    );
  } else {
    const schemaNext = schemaPath + '.next';

    execSync(
      `pnpm rover supergraph compose --config ${configPath} --output ${schemaNext} --elv2-license=accept --client-timeout=80000`,
    );

    if (
      !fs.existsSync(schemaPath) ||
      !isSameFile(schemaPath, schemaNext)
    ) {
      fs.cpSync(schemaNext, schemaPath, { force: true });
      console.log(`NEW Supergraph Schema for ${scope} was printed to ${schemaPath}`);
    }
  }
};

export default async function supergraphCompose(
  scope: 'internal' | 'external',
  proxyTargets: ErxesProxyTarget[],
) {
  await writeSupergraphConfig(scope, proxyTargets);
  await supergraphComposeOnce(scope);
  if (NODE_ENV === 'development' && !pollIntervals[scope]) {
    pollIntervals[scope] = setInterval(async () => {
      try {
        await supergraphComposeOnce(scope);
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.log(`[${scope}]`, e.message);
        } else {
          console.log(`[${scope}] Unknown error:`, e);
        }
      }
    }, Number(SUPERGRAPH_POLL_INTERVAL_MS) || 10_000);
  }
}
