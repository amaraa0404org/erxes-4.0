const fetch = require('node-fetch');

const EMAIL = 'amaraa@erxes.io';
const PASSWORD = '04240410Amar@2';
const URL = 'http://localhost:4000/graphql';

let token = '';
let headers = {};

async function main() {
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
  console.log('Authenticated successfully!');

  // Test adding a UOM
  console.log('Adding UOM...');
  const uomsAddMutation = `
    mutation uomsAdd($name: String!, $code: String!) {
      uomsAdd(name: $name, code: $code) {
        _id
        name
        code
      }
    }
  `;

  const uomCode = 'DDD_TEST_' + Math.floor(Math.random() * 10000);
  const uomAddRes = await fetch(URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: uomsAddMutation,
      variables: { name: 'Test UOM', code: uomCode }
    })
  });

  const uomAddResult = await uomAddRes.json();
  if (uomAddResult.errors) {
    throw new Error(`uomsAdd Mutation failed: ${JSON.stringify(uomAddResult.errors)}`);
  }

  const createdUom = uomAddResult.data.uomsAdd;
  console.log('Created UOM:', createdUom);

  // Test removing the UOM
  console.log('Removing UOM...');
  const uomsRemoveMutation = `
    mutation uomsRemove($uomIds: [String!]) {
      uomsRemove(uomIds: $uomIds)
    }
  `;

  const uomRemoveRes = await fetch(URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: uomsRemoveMutation,
      variables: { uomIds: [createdUom._id] }
    })
  });

  const uomRemoveResult = await uomRemoveRes.json();
  if (uomRemoveResult.errors) {
    throw new Error(`uomsRemove Mutation failed: ${JSON.stringify(uomRemoveResult.errors)}`);
  }

  console.log('Removed UOM:', uomRemoveResult.data.uomsRemove);
  console.log('\n=========================================');
  console.log(' UOMS MUTATION INTEGRATION TEST PASSED! ');
  console.log('=========================================');
}

main().catch(console.error);
