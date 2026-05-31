const { MongoClient } = require('mongodb');

async function run() {
  const uri = 'mongodb://localhost:27017/erxes';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('erxes');
    const collection = db.collection('client_portals');

    // Find all client portals first
    const portals = await collection.find({}).toArray();
    console.log('Current client portals:', portals);

    if (portals.length > 0) {
      // We will delete the existing ones and insert one with the desired _id
      await collection.deleteMany({});
      const newPortal = {
        ...portals[0],
        _id: '10975bd1-0b14-40ac-a2ad-6366d9697447',
        name: 'test_client_portal',
      };
      await collection.insertOne(newPortal);
      console.log('Successfully updated client portal to ID: 10975bd1-0b14-40ac-a2ad-6366d9697447');
    } else {
      // If none exist, insert a new one
      const newPortal = {
        _id: '10975bd1-0b14-40ac-a2ad-6366d9697447',
        name: 'test_client_portal',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await collection.insertOne(newPortal);
      console.log('Successfully inserted new client portal with ID: 10975bd1-0b14-40ac-a2ad-6366d9697447');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

run();
