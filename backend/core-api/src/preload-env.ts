/**
 * Preload script that finds and loads the root .env file BEFORE
 * any application modules are imported.
 *
 * Usage: node --require ./src/preload-env.ts src/main.ts
 *        or tsx --require ./src/preload-env.ts src/main.ts
 *
 * This ensures process.env is populated before any module-level
 * dotenv.config() or process.env destructuring runs.
 */
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

let dir = process.cwd();
const root = path.parse(dir).root;

while (dir !== root) {
  const envPath = path.join(dir, '.env');
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    break;
  }
  dir = path.dirname(dir);
}
