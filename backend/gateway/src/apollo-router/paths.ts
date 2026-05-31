import * as path from 'path';
import * as fs from 'fs';

export const dirTempPath = path.resolve(__dirname, 'temp');

if (!fs.existsSync(dirTempPath)) {
  fs.mkdirSync(dirTempPath, { recursive: true });
}

export const getSupergraphConfigPath = (scope: 'internal' | 'external') =>
  path.resolve(dirTempPath, `supergraph-${scope}.yaml`);

export const getSupergraphPath = (scope: 'internal' | 'external') =>
  path.resolve(dirTempPath, `supergraph-${scope}.graphql`);

export const getRouterConfigPath = (scope: 'internal' | 'external') =>
  path.resolve(dirTempPath, `router-${scope}.yaml`);

export const routerPath = path.resolve(dirTempPath, 'router');

// Backward compatibility exports (defaulting to internal)
export const supergraphConfigPath = getSupergraphConfigPath('internal');
export const supergraphPath = getSupergraphPath('internal');
export const routerConfigPath = getRouterConfigPath('internal');
