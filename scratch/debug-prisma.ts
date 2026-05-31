import { prisma } from '../backend/erxes-api-shared/src/utils';

async function check() {
  const model = prisma.cPUser;
  console.log('--- cPUser info ---');
  console.log('Keys:', Object.keys(model || {}));
  console.log('name:', (model as any).name);
  console.log('$name:', (model as any).$name);
  console.log('constructor name:', model.constructor.name);
  console.log('Symbol keys:', Object.getOwnPropertySymbols(model));
  
  // Let's see if there is any internal property
  for (const sym of Object.getOwnPropertySymbols(model)) {
    console.log('Symbol', sym.toString(), ':', (model as any)[sym]);
  }
}

check().catch(console.error);
