const fetch = require('node-fetch');

const EMAIL = 'amaraa@erxes.io';
const PASSWORD = '04240410Amar@2';

async function tryLogin(port) {
  const url = `http://localhost:${port}/graphql`;
  console.log(`Trying port ${port} at ${url}...`);

  const loginMutation = `
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: loginMutation,
        variables: { email: EMAIL, password: PASSWORD },
      }),
    });

    if (!response.ok) {
      console.log(`Port ${port} failed with status: ${response.status}`);
      return null;
    }

    const result = await response.json();
    console.log(`Response headers:`, JSON.stringify([...response.headers.entries()], null, 2));

    const cookies = response.headers.raw()['set-cookie'] || [];
    console.log('Set-Cookie headers:', cookies);

    let token = null;
    for (const cookie of cookies) {
      const match = cookie.match(/auth-token=([^;]+)/);
      if (match) {
        token = match[1];
        break;
      }
    }

    if (token) {
      console.log(`Successfully extracted auth-token: ${token.substring(0, 20)}...`);
      return token;
    } else {
      console.error('Could not find auth-token cookie in response!');
      return null;
    }
  } catch (err) {
    console.log(`Port ${port} connection error:`, err.message);
    return null;
  }
}

async function testUser(port, token) {
  const url = `http://localhost:${port}/graphql`;
  const currentUserQuery = `
    query {
      currentUser {
        _id
        email
        username
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ query: currentUserQuery }),
    });

    const result = await response.json();
    console.log(`Port ${port} currentUser response:`, JSON.stringify(result, null, 2));
  } catch (err) {
    console.error(`Port ${port} currentUser query failed:`, err.message);
  }
}

async function main() {
  const ports = [4000, 3300];
  let successfulPort = null;
  let token = null;

  for (const port of ports) {
    token = await tryLogin(port);
    if (token) {
      successfulPort = port;
      break;
    }
  }

  if (successfulPort && token) {
    console.log(`Testing currentUser query on port ${successfulPort}...`);
    await testUser(successfulPort, token);
  } else {
    console.error('Failed to log in on any port!');
  }
}

main().catch(console.error);
