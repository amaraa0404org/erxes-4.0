import fetch from 'node-fetch';
import { prisma } from './src/utils/prisma';

const EMAIL = 'amaraa@erxes.io';
const PASSWORD = '04240410Amar@2';
const GQL_URL = 'http://localhost:4000/graphql';
const REST_URL = 'http://localhost:3301';

async function main() {
  console.log("=== STARTING USER-REQUESTED TRANSLATION AND CLIENT PORTAL KEY TEST ===");

  // 1. Authenticate with local Gateway to get user auth-token
  console.log("\n[1] Authenticating with erxes Gateway using user credentials...");
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
    throw new Error(`Login failed with status ${loginRes.status}`);
  }

  const loginResult: any = await loginRes.json();
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

  // 2. Create Client Portal Key in the database
  console.log("\n[2] Generating Client Portal Key / Token...");
  const customToken = `CLIENT_PORTAL_KEY_AMARAA_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  
  // Clean up any old portals with similar name patterns to keep database clean
  await prisma.clientPortal.deleteMany({
    where: { name: { startsWith: "Amaraa Custom Portal" } }
  });

  const portal = await prisma.clientPortal.create({
    data: {
      name: `Amaraa Custom Portal`,
      token: customToken,
      url: "http://localhost:8080"
    }
  });

  const portalId = portal.id;
  const portalKey = portal.token;
  console.log(`Successfully created Client Portal in PostgreSQL!`);
  console.log(`- ID: ${portalId}`);
  console.log(`- Generated Client Portal Key: "${portalKey}"`);

  // 3. Add a localized Product with both 'en' and 'mn' values in JSONB fields
  console.log("\n[3] Adding a localized Product with English (en) and Mongolian (mn) translations...");
  
  // Clean up any old test product
  await prisma.product.deleteMany({
    where: { code: "AMARAA_PRODUCT_001" }
  });

  const category = await prisma.productCategory.findFirst();
  const categoryId = category ? category.id : "test-category-id";

  const product = await prisma.product.create({
    data: {
      code: "AMARAA_PRODUCT_001",
      categoryId,
      name: {
        en: "Premium Erxes Cloud Solution",
        mn: "Эрксэс Премиум Клауд Систем"
      },
      description: {
        en: "World-class customer operating system for growing teams.",
        mn: "Өсөн нэмэгдэж буй багуудад зориулсан дэлхийн жишигт нийцсэн систем."
      }
    }
  });
  console.log(`Successfully added product: ${product.id}`);

  // 4. Query the Product through the GraphQL gateway and display raw responses
  console.log("\n[4] Querying the Product via GraphQL Gateway and showing raw responses...");

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

  // A. Query with English header ('x-language': 'en')
  console.log("\n--- Querying with 'x-language: en' ---");
  const enRes = await fetch(GQL_URL, {
    method: 'POST',
    headers: { ...authHeaders, 'x-language': 'en' },
    body: JSON.stringify({
      query: productQuery,
      variables: { _id: product.id }
    })
  });
  const enData = await enRes.json();
  console.log("Raw English Response:");
  console.log(JSON.stringify(enData, null, 2));

  // B. Query with Mongolian header ('x-language': 'mn')
  console.log("\n--- Querying with 'x-language: mn' ---");
  const mnRes = await fetch(GQL_URL, {
    method: 'POST',
    headers: { ...authHeaders, 'x-language': 'mn' },
    body: JSON.stringify({
      query: productQuery,
      variables: { _id: product.id }
    })
  });
  const mnData = await mnRes.json();
  console.log("Raw Mongolian Response:");
  console.log(JSON.stringify(mnData, null, 2));

  // 5. Use the newly created Client Portal Key/Token to fetch custom translations
  console.log("\n[5] Adding custom translations and fetching them via Client Portal REST Endpoint...");

  // Clean old translations if any
  await prisma.translation.deleteMany({
    where: {
      clientPortalId: portalId
    }
  });

  // Seed translations for this portal specifically
  await prisma.translation.create({
    data: {
      clientPortalId: portalId,
      namespace: "portal",
      language: "en",
      key: "portal.welcome_msg",
      value: "Welcome to Amaraa's custom Client Portal!"
    }
  });

  await prisma.translation.create({
    data: {
      clientPortalId: portalId,
      namespace: "portal",
      language: "mn",
      key: "portal.welcome_msg",
      value: "Амараагийн захиалгат Харилцагчийн Порталд тавтай морил!"
    }
  });

  // A. Fetch English translations using the new Client Portal Key
  console.log(`\n--- Fetching English translations using Portal Key: ${portalKey} ---`);
  const restEnRes = await fetch(`${REST_URL}/translations/en/portal.json`, {
    headers: { 'x-portal-token': portalKey }
  });
  const restEnData = await restEnRes.json();
  console.log("Raw English Translations Response:");
  console.log(JSON.stringify(restEnData, null, 2));

  // B. Fetch Mongolian translations using the new Client Portal Key
  console.log(`\n--- Fetching Mongolian translations using Portal Key: ${portalKey} ---`);
  const restMnRes = await fetch(`${REST_URL}/translations/mn/portal.json`, {
    headers: { 'x-portal-token': portalKey }
  });
  const restMnData = await restMnRes.json();
  console.log("Raw Mongolian Translations Response:");
  console.log(JSON.stringify(restMnData, null, 2));

  console.log("\n=== TRANSLATION INTEGRATION AND CLIENT PORTAL KEY TEST COMPLETED ===");
  process.exit(0);
}

main().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
