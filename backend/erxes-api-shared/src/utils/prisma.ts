import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as path from 'path';

let _prisma: PrismaClient | null = null;

function findAndLoadEnv() {
  // Walk up from process.cwd() looking for a .env file that contains
  // DATABASE_URL.  This covers the case where cwd is a sub-package
  // (e.g. backend/core-api) while the .env lives at the workspace root.
  try {
    const dotenv = require('dotenv');
    let dir = process.cwd();
    const root = path.parse(dir).root;
    while (dir !== root) {
      const envPath = path.join(dir, '.env');
      try {
        const fs = require('fs');
        if (fs.existsSync(envPath)) {
          dotenv.config({ path: envPath });
          if (process.env.DATABASE_URL) return;
        }
      } catch {
        // ignore and try parent
      }
      dir = path.dirname(dir);
    }
  } catch {
    // dotenv not installed – rely on environment
  }
}

function createPrismaClient(): PrismaClient {
  // Ensure DATABASE_URL is available – try loading .env if needed
  if (!process.env.DATABASE_URL) {
    findAndLoadEnv();
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL environment variable is not defined. ' +
      'Make sure it is set in your .env file or environment.',
    );
  }

  // Prisma v7: PrismaPg accepts a connection string directly
  const adapter = new PrismaPg(connectionString);
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['info', 'warn', 'error'],
  });
}

/**
 * Lazy-initialized Prisma client singleton.
 *
 * The client is NOT created at import time. Instead it is created on first
 * access via the `prisma` proxy. This gives the host application time to
 * call `dotenv.config()` (or any other env-setup code) before Prisma reads
 * `process.env.DATABASE_URL`.
 */
function getPrismaClient(): PrismaClient {
  if (_prisma) return _prisma;

  if (process.env.NODE_ENV === 'production') {
    _prisma = createPrismaClient();
  } else {
    // Prevent multiple instances in development (tsx watch restarts)
    if (!(global as any).__prisma) {
      (global as any).__prisma = createPrismaClient();
    }
    _prisma = (global as any).__prisma;
  }

  return _prisma!;
}

// Export a Proxy that lazily initializes the PrismaClient on first property access.
// This allows modules to `import { prisma } from '...'` without triggering
// eager initialization at module-load time.
const prisma: PrismaClient = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    const client = getPrismaClient();
    const value = (client as any)[prop];
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
  has(_target, prop) {
    return prop in getPrismaClient();
  },
});

export { prisma };
