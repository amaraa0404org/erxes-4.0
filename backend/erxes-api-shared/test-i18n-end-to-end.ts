import { prisma } from './src/utils/prisma';
import { resolveLocalized } from './src/utils/localization';

async function runTest() {
  console.log("=== STARTING END-TO-END TRANSLATION INTEGRATION TEST ===");

  // 1. Clean up old test data
  console.log("Cleaning up old test data...");
  await prisma.translation.deleteMany({
    where: {
      OR: [
        { key: "login.welcome" },
        { key: "login.button" }
      ]
    }
  });

  await prisma.product.deleteMany({
    where: { code: "TEST_PRODUCT_CODE_123" }
  });

  await prisma.clientPortal.deleteMany({
    where: { token: "TEST_PORTAL_TOKEN_123" }
  });

  await prisma.language.deleteMany({
    where: {
      code: { in: ["en", "mn"] }
    }
  });

  // 2. Insert Languages
  console.log("Inserting Language records...");
  const enLang = await prisma.language.create({
    data: { code: "en", name: "English", isActive: true, isDefault: true }
  });
  const mnLang = await prisma.language.create({
    data: { code: "mn", name: "Mongolian", isActive: true, isDefault: false }
  });
  console.log("Languages inserted:", [enLang.code, mnLang.code]);

  // 3. Insert Client Portal (Portal Key)
  console.log("Inserting Client Portal...");
  const portal = await prisma.clientPortal.create({
    data: {
      name: "Test Client Portal",
      token: "TEST_PORTAL_TOKEN_123",
      url: "http://localhost:3000"
    }
  });
  console.log("Client Portal inserted:", portal.name, "with token", portal.token);

  // 4. Insert Portal translations (Dynamic Portal Strings)
  console.log("Inserting translations (Global Defaults + Portal-specific overrides)...");
  
  // Global defaults (clientPortalId = null)
  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "en",
      key: "login.welcome",
      value: "Welcome to our portal!"
    }
  });

  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "mn",
      key: "login.welcome",
      value: "Порталд тавтай морилно уу!"
    }
  });

  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "en",
      key: "login.button",
      value: "Sign In"
    }
  });

  await prisma.translation.create({
    data: {
      clientPortalId: null,
      namespace: "portal",
      language: "mn",
      key: "login.button",
      value: "Нэвтрэх"
    }
  });

  // Portal-specific override
  await prisma.translation.create({
    data: {
      clientPortalId: portal.id,
      namespace: "portal",
      language: "en",
      key: "login.button",
      value: "Sign In to Test Portal A"
    }
  });

  // 5. Insert Localized Product (JSONB Data)
  console.log("Inserting localized product with en, mn names/descriptions...");
  const product = await prisma.product.create({
    data: {
      code: "TEST_PRODUCT_CODE_123",
      categoryId: "test-category-id",
      name: {
        en: "Premium Subscription Plan",
        mn: "Гишүүнчлэлийн Премиум Багц"
      },
      description: {
        en: "Gives access to all premium features.",
        mn: "Бүх премиум боломжуудыг нээнэ."
      }
    }
  });

  console.log("\n=== TEST RESULTS ===\n");

  // A. Querying the Product from the database
  console.log("1. RAW PRODUCT RECORD IN POSTGRES DATABASE:");
  console.dir(product, { depth: null });

  // B. Simulating GraphQL Resolver Resolution
  console.log("\n2. SIMULATING GRAPHQL RESOLVER RESOLUTION (resolveLocalized):");
  const resolvedEnName = resolveLocalized(product.name as any, "en");
  const resolvedEnDesc = resolveLocalized(product.description as any, "en");
  const resolvedMnName = resolveLocalized(product.name as any, "mn");
  const resolvedMnDesc = resolveLocalized(product.description as any, "mn");

  console.log(`  [Language: EN]`);
  console.log(`    Name: "${resolvedEnName}"`);
  console.log(`    Description: "${resolvedEnDesc}"`);
  
  console.log(`  [Language: MN]`);
  console.log(`    Name: "${resolvedMnName}"`);
  console.log(`    Description: "${resolvedMnDesc}"`);

  // C. Simulating Portal Translation Lookup API (with Fallback Chain)
  console.log("\n3. SIMULATING PORTAL TRANSLATIONS RESOLUTION WITH FALLBACK CHAIN:");
  
  const getSimulatedPortalTranslations = async (portalId: string | null, lang: string, ns: string) => {
    // Fetch global defaults
    const defaults = await prisma.translation.findMany({
      where: { clientPortalId: null, namespace: ns, language: lang }
    });

    // Fetch portal overrides
    const overrides = portalId ? await prisma.translation.findMany({
      where: { clientPortalId: portalId, namespace: ns, language: lang }
    }) : [];

    const merged: Record<string, string> = {};
    defaults.forEach(t => merged[t.key] = t.value);
    overrides.forEach(t => merged[t.key] = t.value);
    return merged;
  };

  const portalTranslationsEn = await getSimulatedPortalTranslations(portal.id, "en", "portal");
  const portalTranslationsMn = await getSimulatedPortalTranslations(portal.id, "mn", "portal");
  const globalTranslationsEn = await getSimulatedPortalTranslations(null, "en", "portal");

  console.log(`  [Client Portal: "Test Client Portal" | Token: "TEST_PORTAL_TOKEN_123"]`);
  console.log(`    Merged translations (EN):`, portalTranslationsEn);
  console.log(`    Merged translations (MN):`, portalTranslationsMn);
  console.log(`  [Global Default Portals | No Override Token]`);
  console.log(`    Merged translations (EN):`, globalTranslationsEn);

  console.log("\n=== END-TO-END TRANSLATION INTEGRATION TEST COMPLETED SUCCESSFULLY ===");
  process.exit(0);
}

runTest().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
