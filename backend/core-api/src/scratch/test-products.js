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

  // Test running ProductsMain query
  console.log('Running ProductsMain query...');
  const query = `query ProductsMain($type: String, $categoryIds: [String], $searchValue: String, $vendorId: String, $brandIds: [String], $tagIds: [String], $segment: String, $segmentData: String, $sortField: String, $sortDirection: Int, $cursor: String, $cursorMode: CURSOR_MODE, $direction: CURSOR_DIRECTION, $limit: Int) {
    productsMain(
      type: $type
      categoryIds: $categoryIds
      searchValue: $searchValue
      vendorId: $vendorId
      brandIds: $brandIds
      tagIds: $tagIds
      segment: $segment
      segmentData: $segmentData
      sortField: $sortField
      sortDirection: $sortDirection
      cursor: $cursor
      cursorMode: $cursorMode
      direction: $direction
      limit: $limit
    ) {
      list {
        _id
        attachment {
          url
          __typename
        }
        categoryId
        code
        createdAt
        propertiesData
        description
        tagIds
        category {
          _id
          name
          __typename
        }
        name
        shortName
        uom
        unitPrice
        type
        vendor {
          _id
          primaryName
          __typename
        }
        __typename
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        __typename
      }
      __typename
    }
  }`;

  const productsRes = await fetch(URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables: {
        cursor: "",
        limit: 30,
        sortField: "createdAt",
        sortDirection: -1
      }
    })
  });

  const productsResult = await productsRes.json();
  console.log('ProductsMain Query Result:', JSON.stringify(productsResult, null, 2));
}

main().catch(console.error);
