const Redis = require('ioredis');

async function main() {
  const redis = new Redis({
    host: 'localhost',
    port: 6379
  });

  console.log('Querying registered services in Redis...');
  const keys = await redis.keys('erxes-service-*');
  console.log('Found service keys:', keys);

  for (const key of keys) {
    const val = await redis.get(key);
    console.log(`- ${key}: ${val}`);
  }

  const activePlugins = await redis.get('erxes-active-plugins');
  console.log('erxes-active-plugins:', activePlugins);

  await redis.disconnect();
}

main().catch(console.error);
