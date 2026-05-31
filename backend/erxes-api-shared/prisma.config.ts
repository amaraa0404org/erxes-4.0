import dotenv from 'dotenv';
import path from 'path';
import { defineConfig, env } from 'prisma/config';

// Load .env from the root workspace directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
});
