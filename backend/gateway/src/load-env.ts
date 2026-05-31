import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

(function loadRootEnv() {
  let dir = __dirname;
  const root = path.parse(dir).root;
  while (dir !== root) {
    const envPath = path.join(dir, '.env');
    if (fs.existsSync(envPath)) {
      dotenv.config({ path: envPath });
      return;
    }
    dir = path.dirname(dir);
  }
  // Fallback: default behaviour
  dotenv.config();
})();
