const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const model = prisma.cPUser;
  console.log('Model keys:', Object.keys(model || {}));
  console.log('Model name:', model.name);
  console.log('Model $name:', model.$name);
  console.log('Model constructor name:', model.constructor.name);
  await prisma.$disconnect();
}

check().catch(console.error);
