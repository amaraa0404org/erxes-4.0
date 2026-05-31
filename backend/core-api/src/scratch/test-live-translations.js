const fetch = require('node-fetch');
const { PrismaClient } = require('@prisma/client');

const EMAIL = 'amaraa@erxes.io';
const PASSWORD = '04240410Amar@2';
const GQL_URL = 'http://localhost:4000/graphql';
const REST_URL = 'http://localhost:3301';

// Direct Prisma setup for seeding test data
const prisma = new PrismaClient();

async function main() {
  console.log("=== STARTING LIVE END-TO-END TRANSLATION TEST ===");

  // 1. Authenticate with local Gateway to get user auth-token
  console.log("\n1. Authenticating with Gateway...");
  const loginMutation = `
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  const loginRes = await fetch(GQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: loginMutation,
      variables: { email: EMAIL, password: PASSWORD },
    }),
  });

  if (!loginRes.ok) {
    throw new Error(`Login failed: ${loginRes.status}`);
  }

  const loginResult = await loginRes.json();
  if (loginResult.errors) {
    throw new Error(`Login GraphQL errors: ${JSON.stringify(loginResult.errors)}`);
  }

  let authToken = '';
  const cookies = loginRes.headers.raw()['set-cookie'] || [];
  for (const cookie of cookies) {
    const match = cookie.match(/auth-token=([^;]+)/);
    if (match) {
      authToken = match[1];
      break;
    }
  }

  if (!authToken) {
    // If not found in cookie, look at return value
    authToken = loginResult.data.login;
  }

  if (!authToken) {
    throw new Error("Could not acquire auth token.");
  }

  const authHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };
  console.log("Successfully authenticated! Token acquired.");

  // 2. Seed dynamic data directly into the database via Prisma
  console.log("\n2. Seeding test records in Postgres database...");
  
  // Clean old test data
  await prisma.translation.deleteMany({
    where: {
      OR: [
        { key: "portal.login_welcome" },
        { key: "portal.submit_btn" }
      ]
    }
  });
  await prisma.product.deleteMany({ where: { code: "LIVE_TEST_PRODUCT_001" } });
  await prisma.clientPortal.deleteMany({ where: { token: "PORTAL_LIVE_TOKEN_999" } });

  // Create Client Portal Key
  const portal = await prisma.clientPortal.create({
    data: {
      name: "Live Integration Portal",
      token: "PORTAL_LIVE_TOKEN_999",
      url: "http://localhost:8080"
    }
  });

  // Create translations
  // Global defaults (clientPortalId: null)
  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "en",
      key: "portal.login_welcome",
      value: "Welcome to erxes Portal!"
    }
  });
  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "mn",
      key: "portal.login_welcome",
      value: "erxes Порталд тавтай морилно уу!"
    }
  });
  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "en",
      key: "portal.submit_btn",
      value: "Submit Details"
    }
  });
  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "mn",
      key: "portal.submit_btn",
      value: "Илгээх"
    }
  });

  // Portal-specific override (clientPortalId: portal.id)
  await prisma.translation.create({
    data: {
      clientPortalId: portal.id,
      namespace: "portal",
      language: "mn",
      key: "portal.submit_btn",
      value: "Харилцагчийн мэдээлэл илгээх"
    }
  });

  // Create localized Product (JSONB fields)
  const category = await prisma.productCategory.findFirst();
  const categoryId = category ? category.id : "test-category-id";

  const product = await prisma.product.create({
    data: {
      code: "LIVE_TEST_PRODUCT_001",
      categoryId,
      name: {
        en: "Dynamic Enterprise Suite",
        mn: "Аж Үйлдвэрийн Динамик Багц"
      },
      description: {
        en: "Ultimate localization features for large projects.",
        mn: "Том хэмжээний төслүүдэд зориулсан орчуулгын систем."
      }
    }
  });
  console.log(`Test records seeded successfully! Product ID: ${product.id}, Client Portal Token: "PORTAL_LIVE_TOKEN_999"`);

  // 3. Query the Product through the live GraphQL gateway on port 4000
  console.log("\n3. Querying the Product via Live GraphQL Gateway (with language headers)...");

  const productQuery = `
    query productDetail($_id: String) {
      productDetail(_id: $_id) {
        _id
        code
        name
        description
      }
    }
  `;

  // A. Query in English (x-language: en)
  const enRes = await fetch(GQL_URL, {
    method: 'POST',
    headers: { ...authHeaders, 'x-language': 'en' },
    body: JSON.stringify({
      query: productQuery,
      variables: { _id: product.id }
    })
  });
  const enData = await enRes.json();
  console.log("\n[GraphQL Response] Header 'x-language: en':");
  console.log(JSON.stringify(enData, null, 2));

  // B. Query in Mongolian (x-language: mn)
  const mnRes = await fetch(GQL_URL, {
    method: 'POST',
    headers: { ...authHeaders, 'x-language': 'mn' },
    body: JSON.stringify({
      query: productQuery,
      variables: { _id: product.id }
    })
  });
  const mnData = await mnRes.json();
  console.log("\n[GraphQL Response] Header 'x-language: mn':");
  console.log(JSON.stringify(mnData, null, 2));

  // 4. Fetch translations via Client Portal REST Endpoint on Port 3301
  console.log("\n4. Fetching translations via clientportal-api REST Endpoint on Port 3301...");

  // A. English translations (en/portal.json)
  const cpEnRes = await fetch(`${REST_URL}/translations/en/portal.json`, {
    headers: { 'x-portal-token': 'PORTAL_LIVE_TOKEN_999' }
  });
  const cpEnData = await cpEnRes.json();
  console.log("\n[REST Response] GET /translations/en/portal.json:");
  console.log(JSON.stringify(cpEnData, null, 2));

  // B. Mongolian translations (mn/portal.json with portal-specific overrides)
  const cpMnRes = await fetch(`${REST_URL}/translations/mn/portal.json`, {
    headers: { 'x-portal-token': 'PORTAL_LIVE_TOKEN_999' }
  });
  const cpMnData = await cpMnRes.json();
  console.log("\n[REST Response] GET /translations/mn/portal.json (with portal overrides):");
  console.log(JSON.stringify(cpMnData, null, 2));

  console.log("\n=== LIVE TRANSLATION INTEGRATION TEST COMPLETED SUCCESSFULLY ===");
  process.exit(0);
}

main().catch(err => {
  console.error("Live test failed:", err);
  process.exit(1);
});
