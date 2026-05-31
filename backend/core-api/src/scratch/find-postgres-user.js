const { prisma } = require('/Users/Amaraa0404/Documents/projects/erxes-4.0/backend/erxes-api-shared/utils/dist/erxes-api-shared-utils.cjs.js');

async function main() {
  console.log('Connecting to PostgreSQL and searching for user...');
  const user = await prisma.user.findFirst({
    where: {
      email: 'amaraa@erxes.io'
    }
  });

  console.log('User in Postgres:', JSON.stringify(user, null, 2));
}

main().catch(console.error);
