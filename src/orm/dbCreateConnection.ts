import { createClient } from 'redis';
import { Connection, createConnection, getConnectionManager } from 'typeorm';

import config from './config/ormconfig';
export const client = createClient({
  url: 'redis://redis:6379',
});

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {
    const conn = await createConnection(config);
    await client.connect();
    // const getApp = async () => await createConnection(config);
    // getApp().then(async () => {
    //   await client.connect();
    // });

    console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
  } catch (err) {
    if (err.name === 'AlreadyHasActiveConnectionError') {
      const activeConnection = getConnectionManager().get(config.name);
      return activeConnection;
    }
    console.log(err);
  }
  return null;
};
// export const getApp = async () => await createConnection(config);

// getApp().then(async () => {
//   await client.connect();
// });
