const fetch = require('node-fetch');
const { prisma } = require('/Users/Amaraa0404/Documents/projects/erxes-4.0/backend/erxes-api-shared/utils/dist/erxes-api-shared-utils.cjs.js');

const EMAIL = 'amaraa@erxes.io';
const PASSWORD = '04240410Amar@2';
const URL = 'http://localhost:4000/graphql';

let token = '';
let headers = {};
let userId = '';

async function login() {
  console.log('Authenticating with local Gateway...');
  const loginMutation = `
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: loginMutation,
      variables: { email: EMAIL, password: PASSWORD },
    }),
  });

  if (!response.ok) {
    throw new Error(`Login failed with status: ${response.status}`);
  }

  const result = await response.json();
  if (result.errors) {
    throw new Error(`Login GraphQL errors: ${JSON.stringify(result.errors)}`);
  }

  const cookies = response.headers.raw()['set-cookie'] || [];
  for (const cookie of cookies) {
    const match = cookie.match(/auth-token=([^;]+)/);
    if (match) {
      token = match[1];
      break;
    }
  }

  if (!token) {
    throw new Error('Failed to find auth-token cookie in response');
  }

  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  // Get current user ID
  const userQuery = `
    query {
      currentUser {
        _id
      }
    }
  `;
  const userRes = await fetch(URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: userQuery }),
  });
  const userResult = await userRes.json();
  userId = userResult.data.currentUser._id;
  console.log(`Authenticated successfully! User ID: ${userId}`);
}

async function queryGraphQL(query, variables = {}) {
  const response = await fetch(URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });
  const result = await response.json();
  if (result.errors) {
    throw new Error(`GraphQL Errors: ${JSON.stringify(result.errors)}`);
  }
  return result.data;
}

async function testPermissions() {
  console.log('\n--- TESTING PERMISSIONS MODULE ---');

  // 1. Add Permission Group
  console.log('1. Adding permission group...');
  const addMutation = `
    mutation permissionGroupAdd($name: String!, $description: String, $permissions: [PermissionInput]!) {
      permissionGroupAdd(name: $name, description: $description, permissions: $permissions) {
        _id
        name
        description
      }
    }
  `;
  const addRes = await queryGraphQL(addMutation, {
    name: 'Automation Test Group',
    description: 'Created by integration tests',
    permissions: []
  });
  const pgId = addRes.permissionGroupAdd._id;
  console.log(`   Group created successfully! ID: ${pgId}`);

  // 2. Query Permission Groups List
  console.log('2. Querying permission groups...');
  const listQuery = `
    query {
      permissionGroups {
        _id
        name
      }
    }
  `;
  const listRes = await queryGraphQL(listQuery);
  const found = listRes.permissionGroups.find(g => g._id === pgId);
  if (!found) throw new Error('Created permission group was not found in listing!');
  console.log(`   Found in list: ${found.name}`);

  // 3. Query Group Detail
  console.log('3. Querying permission group detail...');
  const detailQuery = `
    query permissionGroupDetail($id: String!) {
      permissionGroupDetail(id: $id) {
        _id
        name
        description
      }
    }
  `;
  const detailRes = await queryGraphQL(detailQuery, { id: pgId });
  console.log(`   Detail query name: ${detailRes.permissionGroupDetail.name}`);

  // 4. Edit Permission Group
  console.log('4. Editing permission group...');
  const editMutation = `
    mutation permissionGroupEdit($_id: String!, $name: String) {
      permissionGroupEdit(_id: $_id, name: $name) {
        _id
        name
      }
    }
  `;
  const editRes = await queryGraphQL(editMutation, {
    _id: pgId,
    name: 'Updated Automation Test Group'
  });
  console.log(`   Group updated successfully! New name: ${editRes.permissionGroupEdit.name}`);

  // 5. Remove Permission Group
  console.log('5. Removing permission group...');
  const removeMutation = `
    mutation permissionGroupRemove($_id: String!) {
      permissionGroupRemove(_id: $_id)
    }
  `;
  await queryGraphQL(removeMutation, { _id: pgId });
  console.log('   Group removed successfully!');
}

async function testTemplates() {
  console.log('\n--- TESTING TEMPLATES MODULE ---');

  // 0. Create a valid ProductCategory in PG for template content lookup
  console.log('0. Creating ProductCategory in PostgreSQL...');
  const prodCat = await prisma.productCategory.create({
    data: {
      name: 'Test ProductCategory for Template',
      code: 'PC-' + Date.now(),
      order: '0/',
    }
  });
  console.log(`   ProductCategory created! ID: ${prodCat.id}`);

  // 1. Add Category
  console.log('1. Adding template category...');
  const addCatMutation = `
    mutation templateCategoryAdd($name: String!, $code: String) {
      templateCategoryAdd(name: $name, code: $code) {
        _id
        name
        code
      }
    }
  `;
  const addCatRes = await queryGraphQL(addCatMutation, {
    name: 'Automation Test Category',
    code: 'ATC-TEST-' + Date.now()
  });
  const catId = addCatRes.templateCategoryAdd._id;
  console.log(`   Category created successfully! ID: ${catId}`);

  // 2. Query Template Categories
  console.log('2. Querying template categories...');
  const catListQuery = `
    query {
      templateCategories {
        list {
          _id
          name
        }
      }
    }
  `;
  const catListRes = await queryGraphQL(catListQuery);
  const catFound = catListRes.templateCategories.list.find(c => c._id === catId);
  if (!catFound) throw new Error('Created category not found in listing!');
  console.log(`   Found category in list: ${catFound.name}`);

  // 3. Add Template
  console.log('3. Adding document template...');
  const addTemplateMutation = `
    mutation templateAdd($name: String, $description: String, $contentType: String, $contentId: String, $categoryIds: [String]) {
      templateAdd(name: $name, description: $description, contentType: $contentType, contentId: $contentId, categoryIds: $categoryIds) {
        _id
        name
      }
    }
  `;
  const addTemplateRes = await queryGraphQL(addTemplateMutation, {
    name: 'Automation Test Doc Template',
    description: 'Test template description',
    contentType: 'core:product:productCategory',
    contentId: prodCat.id,
    categoryIds: [catId]
  });
  const templateId = addTemplateRes.templateAdd._id;
  console.log(`   Template created successfully! ID: ${templateId}`);

  // 4. Query Templates List
  console.log('4. Querying templates list...');
  const listQuery = `
    query {
      templateList {
        list {
          _id
          name
        }
      }
    }
  `;
  const listRes = await queryGraphQL(listQuery);
  const tempFound = listRes.templateList.list.find(t => t._id === templateId);
  if (!tempFound) throw new Error('Created template not found in listing!');
  console.log(`   Found template in list: ${tempFound.name}`);

  // 5. Query Template Detail
  console.log('5. Querying template detail...');
  const detailQuery = `
    query templateDetail($_id: String!) {
      templateDetail(_id: $_id) {
        _id
        name
        description
      }
    }
  `;
  const detailRes = await queryGraphQL(detailQuery, { _id: templateId });
  console.log(`   Detail query name: ${detailRes.templateDetail.name}`);

  // 6. Edit Template
  console.log('6. Editing template...');
  const editTemplateMutation = `
    mutation templateEdit($_id: String!, $name: String) {
      templateEdit(_id: $_id, name: $name) {
        _id
        name
      }
    }
  `;
  const editRes = await queryGraphQL(editTemplateMutation, {
    _id: templateId,
    name: 'Updated Automation Test Doc Template'
  });
  console.log(`   Template updated successfully! New name: ${editRes.templateEdit.name}`);

  // 7. Remove Template
  console.log('7. Removing template...');
  const removeTemplateMutation = `
    mutation templateRemove($_ids: [String!]) {
      templateRemove(_ids: $_ids)
    }
  `;
  await queryGraphQL(removeTemplateMutation, { _ids: [templateId] });
  console.log('   Template removed successfully!');

  // 8. Remove Category
  console.log('8. Removing category...');
  const removeCatMutation = `
    mutation templateCategoryRemove($_ids: [String!]) {
      templateCategoryRemove(_ids: $_ids)
    }
  `;
  await queryGraphQL(removeCatMutation, { _ids: [catId] });
  console.log('   Category removed successfully!');

  // 9. Clean up ProductCategory
  console.log('9. Cleaning up ProductCategory in PostgreSQL...');
  await prisma.productCategory.delete({ where: { id: prodCat.id } });
  console.log('   ProductCategory cleaned up successfully!');
}

async function testAutomationsAndAgents() {
  console.log('\n--- TESTING AUTOMATIONS & AI AGENTS MODULE ---');

  // 1. Add AI Agent
  console.log('1. Adding AI agent...');
  const addAgentMutation = `
    mutation automationsAiAgentAdd($name: String, $description: String, $connection: JSON, $runtime: JSON, $context: JSON) {
      automationsAiAgentAdd(name: $name, description: $description, connection: $connection, runtime: $runtime, context: $context)
    }
  `;
  const addAgentRes = await queryGraphQL(addAgentMutation, {
    name: 'Automation Test AI Agent',
    description: 'Test description',
    connection: {},
    runtime: {},
    context: {}
  });

  const agent = addAgentRes.automationsAiAgentAdd;
  const agentId = agent._id || agent.id;
  console.log(`   AI Agent created successfully! ID: ${agentId}`);

  // 2. Query AI Agents list
  console.log('2. Querying AI agents list...');
  const agentsQuery = `
    query {
      automationsAiAgents
    }
  `;
  const agentsRes = await queryGraphQL(agentsQuery);
  const foundAgent = agentsRes.automationsAiAgents.find(a => (a._id || a.id) === agentId);
  if (!foundAgent) throw new Error('Created AI Agent not found in listing!');
  console.log(`   Found AI Agent in list: ${foundAgent.name}`);

  // 3. Query AI Agent Detail
  console.log('3. Querying AI Agent detail...');
  const detailQuery = `
    query automationsAiAgentDetail($_id: String) {
      automationsAiAgentDetail(_id: $_id)
    }
  `;
  const detailRes = await queryGraphQL(detailQuery, { _id: agentId });
  console.log(`   Detail query name: ${detailRes.automationsAiAgentDetail.name}`);

  // 4. Edit AI Agent
  console.log('4. Editing AI Agent...');
  const editAgentMutation = `
    mutation automationsAiAgentEdit($_id: String!, $name: String) {
      automationsAiAgentEdit(_id: $_id, name: $name)
    }
  `;
  const editAgentRes = await queryGraphQL(editAgentMutation, {
    _id: agentId,
    name: 'Updated Automation Test AI Agent'
  });
  console.log(`   AI Agent updated successfully! New name: ${editAgentRes.automationsAiAgentEdit.name}`);

  // 5. Add Automation
  console.log('5. Adding automation...');
  const addAutoMutation = `
    mutation automationsAdd($name: String, $status: String) {
      automationsAdd(name: $name, status: $status) {
        _id
        name
        status
      }
    }
  `;
  const addAutoRes = await queryGraphQL(addAutoMutation, {
    name: 'Automation Test Workflow',
    status: 'active'
  });
  const autoId = addAutoRes.automationsAdd._id;
  console.log(`   Automation workflow created! ID: ${autoId}`);

  // 6. Query Automations List
  console.log('6. Querying automations list...');
  const autosQuery = `
    query {
      automations {
        _id
        name
      }
    }
  `;
  const autosRes = await queryGraphQL(autosQuery);
  const foundAuto = autosRes.automations.find(a => a._id === autoId);
  if (!foundAuto) throw new Error('Created automation not found in list!');
  console.log(`   Found automation in list: ${foundAuto.name}`);

  // 7. Edit Automation
  console.log('7. Editing automation...');
  const editAutoMutation = `
    mutation automationsEdit($_id: String, $name: String) {
      automationsEdit(_id: $_id, name: $name) {
        _id
        name
      }
    }
  `;
  const editAutoRes = await queryGraphQL(editAutoMutation, {
    _id: autoId,
    name: 'Updated Automation Test Workflow'
  });
  console.log(`   Automation updated! New name: ${editAutoRes.automationsEdit.name}`);

  // 8. Remove Automation & AI Agent
  console.log('8. Removing automation & cleaning up AI agent...');
  const removeAutoMutation = `
    mutation automationsRemove($automationIds: [String]) {
      automationsRemove(automationIds: $automationIds)
    }
  `;
  await queryGraphQL(removeAutoMutation, { automationIds: [autoId] });
  console.log('   Automation workflow removed!');

  // Cleanup AI Agent directly from DB
  await prisma.aiAgent.delete({ where: { id: agentId } });
  console.log('   AI Agent cleaned up successfully!');
}

async function testLogs() {
  console.log('\n--- TESTING LOGS MODULE ---');

  // 1. Query Logs Content Types
  console.log('1. Querying logs content types...');
  const typesQuery = `
    query {
      logsGetContentTypes {
        value
        pluginName
        moduleName
      }
    }
  `;
  const typesRes = await queryGraphQL(typesQuery);
  console.log(`   Fetched log content types: ${typesRes.logsGetContentTypes.length} items`);

  // 2. Query Logs Main List
  console.log('2. Querying logs main list...');
  const listQuery = `
    query logsMainList($page: Int, $perPage: Int) {
      logsMainList(page: $page, perPage: $perPage) {
        list {
          _id
          source
          action
          status
        }
        totalCount
      }
    }
  `;
  const listRes = await queryGraphQL(listQuery, { page: 1, perPage: 5 });
  console.log(`   Fetched logs list. Total logs: ${listRes.logsMainList.totalCount}`);
}

async function testBroadcast() {
  console.log('\n--- TESTING BROADCAST MODULE (ENGAGE MESSAGES) ---');

  // 1. Add Engage Message
  console.log('1. Adding engage message...');
  const addMutation = `
    mutation engageMessageAdd($title: String, $kind: String, $method: String, $fromUserId: String, $targetType: String, $targetIds: [String], $isDraft: Boolean, $isLive: Boolean) {
      engageMessageAdd(title: $title, kind: $kind, method: $method, fromUserId: $fromUserId, targetType: $targetType, targetIds: $targetIds, isDraft: $isDraft, isLive: $isLive) {
        _id
        title
        kind
        method
      }
    }
  `;
  const addRes = await queryGraphQL(addMutation, {
    title: 'Automation Test Engage',
    kind: 'manual',
    method: 'messenger',
    fromUserId: userId,
    targetType: 'customer',
    targetIds: ['dummy-customer-id'],
    isDraft: true,
    isLive: false
  });
  const engageId = addRes.engageMessageAdd._id;
  console.log(`   Engage message created successfully! ID: ${engageId}`);

  // 2. Query Engage Messages List
  console.log('2. Querying engage messages...');
  const listQuery = `
    query engageMessages($kind: String) {
      engageMessages(kind: $kind) {
        list {
          _id
          title
        }
      }
    }
  `;
  const listRes = await queryGraphQL(listQuery, { kind: 'manual' });
  const found = listRes.engageMessages.list.find(m => m._id === engageId);
  if (!found) throw new Error('Created engage message not found in list!');
  console.log(`   Found in list: ${found.title}`);

  // 3. Query Engage Message Detail
  console.log('3. Querying engage message detail...');
  const detailQuery = `
    query engageMessageDetail($_id: String) {
      engageMessageDetail(_id: $_id) {
        _id
        title
        method
      }
    }
  `;
  const detailRes = await queryGraphQL(detailQuery, { _id: engageId });
  console.log(`   Detail query title: ${detailRes.engageMessageDetail.title}`);

  // 4. Edit Engage Message
  console.log('4. Editing engage message...');
  const editMutation = `
    mutation engageMessageEdit($_id: String!, $title: String, $method: String, $isDraft: Boolean, $isLive: Boolean, $targetType: String, $targetIds: [String]) {
      engageMessageEdit(_id: $_id, title: $title, method: $method, isDraft: $isDraft, isLive: $isLive, targetType: $targetType, targetIds: $targetIds) {
        _id
        title
      }
    }
  `;
  const editRes = await queryGraphQL(editMutation, {
    _id: engageId,
    title: 'Updated Automation Test Engage',
    method: 'messenger',
    isDraft: true,
    isLive: false,
    targetType: 'customer',
    targetIds: ['dummy-customer-id']
  });
  console.log(`   Engage message updated successfully! New title: ${editRes.engageMessageEdit.title}`);

  // 5. Remove Engage Message
  console.log('5. Removing engage message...');
  const removeMutation = `
    mutation engageMessageRemove($_ids: [String]) {
      engageMessageRemove(_ids: $_ids)
    }
  `;
  await queryGraphQL(removeMutation, { _ids: [engageId] });
  console.log('   Engage message removed successfully!');
}

async function testBundles() {
  console.log('\n--- TESTING BUNDLES MODULE ---');

  // 1. Add Bundle Condition
  console.log('1. Adding bundle condition...');
  const addCondMutation = `
    mutation bundleConditionAdd($name: String, $description: String, $code: String) {
      bundleConditionAdd(name: $name, description: $description, code: $code) {
        _id
        name
        code
      }
    }
  `;
  const addCondRes = await queryGraphQL(addCondMutation, {
    name: 'Automation Test BC',
    description: 'Created by automated test',
    code: 'ATC-BC-TEST-' + Date.now()
  });
  const bcId = addCondRes.bundleConditionAdd._id;
  console.log(`   Bundle condition created! ID: ${bcId}`);

  // 2. Query Bundle Conditions
  console.log('2. Querying bundle conditions...');
  const condListQuery = `
    query {
      allBundleConditions {
        _id
        name
      }
    }
  `;
  const condListRes = await queryGraphQL(condListQuery);
  const foundCond = condListRes.allBundleConditions.find(bc => bc._id === bcId);
  if (!foundCond) throw new Error('Created bundle condition not found in list!');
  console.log(`   Found bundle condition in list: ${foundCond.name}`);

  // 3. Edit Bundle Condition
  console.log('3. Editing bundle condition...');
  const editCondMutation = `
    mutation bundleConditionEdit($_id: String!, $name: String) {
      bundleConditionEdit(_id: $_id, name: $name) {
        _id
        name
      }
    }
  `;
  const editCondRes = await queryGraphQL(editCondMutation, {
    _id: bcId,
    name: 'Updated Automation Test BC'
  });
  console.log(`   Bundle condition updated! New name: ${editCondRes.bundleConditionEdit.name}`);

  // 4. Add Bundle Rule
  console.log('4. Adding bundle rule...');
  const addRuleMutation = `
    mutation bundleRulesAdd($name: String, $description: String, $code: String, $rules: [BundleRuleItemInput]) {
      bundleRulesAdd(name: $name, description: $description, code: $code, rules: $rules) {
        _id
        name
        code
      }
    }
  `;
  const addRuleRes = await queryGraphQL(addRuleMutation, {
    name: 'Automation Test BR',
    description: 'Created by automated test',
    code: 'ATC-BR-TEST-' + Date.now(),
    rules: []
  });
  const brId = addRuleRes.bundleRulesAdd._id;
  console.log(`   Bundle rule created! ID: ${brId}`);

  // 5. Query Bundle Rules
  console.log('5. Querying bundle rules...');
  const rulesListQuery = `
    query {
      bundleRules {
        _id
        name
      }
    }
  `;
  const rulesListRes = await queryGraphQL(rulesListQuery);
  const foundRule = rulesListRes.bundleRules.find(br => br._id === brId);
  if (!foundRule) throw new Error('Created bundle rule not found in list!');
  console.log(`   Found bundle rule in list: ${foundRule.name}`);

  // 6. Edit Bundle Rule
  console.log('6. Editing bundle rule...');
  const editRuleMutation = `
    mutation bundleRulesEdit($_id: String!, $name: String) {
      bundleRulesEdit(_id: $_id, name: $name) {
        _id
        name
      }
    }
  `;
  const editRuleRes = await queryGraphQL(editRuleMutation, {
    _id: brId,
    name: 'Updated Automation Test BR'
  });
  console.log(`   Bundle rule updated! New name: ${editRuleRes.bundleRulesEdit.name}`);

  // 7. Cleanup Condition & Rule
  console.log('7. Removing bundle condition & rule...');
  const removeCondMutation = `
    mutation bundleConditionRemove($_ids: [String]) {
      bundleConditionRemove(_ids: $_ids)
    }
  `;
  await queryGraphQL(removeCondMutation, { _ids: [bcId] });
  console.log('   Bundle condition removed!');

  const removeRuleMutation = `
    mutation bundleRulesRemove($_ids: [String]) {
      bundleRulesRemove(_ids: $_ids)
    }
  `;
  await queryGraphQL(removeRuleMutation, { _ids: [brId] });
  console.log('   Bundle rule removed!');
}

async function testClientPortalDatabase() {
  console.log('\n--- TESTING CLIENT PORTAL MODELS DIRECTLY IN DATABASE ---');

  // 1. ClientPortal
  console.log('1. Creating ClientPortal config...');
  const cp = await prisma.clientPortal.create({
    data: {
      name: 'Test Client Portal',
      description: 'Created by automated integration test',
      url: 'http://test-portal.local',
    }
  });
  console.log(`   ClientPortal created successfully! ID: ${cp.id}`);

  // Query ClientPortal
  console.log('2. Querying ClientPortal config...');
  const cpDoc = await prisma.clientPortal.findUnique({
    where: { id: cp.id }
  });
  console.log(`   Found ClientPortal: ${cpDoc.name} (${cpDoc.url})`);

  // Update ClientPortal
  console.log('3. Updating ClientPortal config...');
  const cpUpdated = await prisma.clientPortal.update({
    where: { id: cp.id },
    data: { name: 'Updated Test Client Portal' }
  });
  console.log(`   ClientPortal updated successfully! New name: ${cpUpdated.name}`);

  // 2. CPUser
  console.log('4. Creating Client Portal User...');
  const cpUser = await prisma.cPUser.create({
    data: {
      clientPortalId: cp.id,
      email: 'cp-user@test.local',
      password: 'password123',
      code: 'CP001',
    }
  });
  console.log(`   CPUser created successfully! ID: ${cpUser.id}`);

  // Query CPUser
  console.log('5. Querying Client Portal User...');
  const cpUserDoc = await prisma.cPUser.findUnique({
    where: { id: cpUser.id }
  });
  console.log(`   Found CPUser: ${cpUserDoc.email}`);

  // Update CPUser
  console.log('6. Updating Client Portal User...');
  const cpUserUpdated = await prisma.cPUser.update({
    where: { id: cpUser.id },
    data: { email: 'cp-user-updated@test.local' }
  });
  console.log(`   CPUser updated successfully! Email: ${cpUserUpdated.email}`);

  // 3. CPComment
  console.log('7. Creating Client Portal Comment...');
  const cpComment = await prisma.cPComment.create({
    data: {
      userId: cpUser.id,
      content: 'This is a test comment',
      type: 'post',
      typeId: 'target-123',
    }
  });
  console.log(`   CPComment created successfully! ID: ${cpComment.id}`);

  // Query CPComment
  console.log('8. Querying Client Portal Comment...');
  const cpCommentDoc = await prisma.cPComment.findUnique({
    where: { id: cpComment.id }
  });
  console.log(`   Found CPComment: "${cpCommentDoc.content}"`);

  // 4. CPNotification
  console.log('9. Creating Client Portal Notification...');
  const cpNotification = await prisma.cPNotification.create({
    data: {
      cpUserId: cpUser.id,
      title: 'Test Notification',
      message: 'This is a test notification',
      isRead: false,
      clientPortalId: cp.id,
    }
  });
  console.log(`   CPNotification created successfully! ID: ${cpNotification.id}`);

  // Query CPNotification
  console.log('10. Querying Client Portal Notification...');
  const cpNotificationDoc = await prisma.cPNotification.findUnique({
    where: { id: cpNotification.id }
  });
  console.log(`   Found CPNotification: "${cpNotificationDoc.title}"`);

  // CLEANUP CP Models
  console.log('11. Cleaning up all created Client Portal records...');
  await prisma.cPNotification.delete({ where: { id: cpNotification.id } });
  await prisma.cPComment.delete({ where: { id: cpComment.id } });
  await prisma.cPUser.delete({ where: { id: cpUser.id } });
  await prisma.clientPortal.delete({ where: { id: cp.id } });
  console.log('   All Client Portal records cleaned up successfully!');
}

async function main() {
  console.log('==================================================');
  console.log('   STARTING MONOREPO SUBMODULES INTEGRATION TEST  ');
  console.log('==================================================');

  await login();
  
  await testPermissions();
  await testTemplates();
  await testAutomationsAndAgents();
  await testLogs();
  await testBroadcast();
  await testBundles();
  await testClientPortalDatabase();

  console.log('\n==================================================');
  console.log('   ALL INTEGRATION TESTS PASSED SUCCESSFULLY!    ');
  console.log('==================================================');
}

main().catch(err => {
  console.error('\n❌ INTEGRATION TEST RUN FAILED:');
  console.error(err);
  process.exit(1);
});
