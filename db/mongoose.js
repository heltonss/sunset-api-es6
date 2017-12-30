import mongoose from 'mongoose';
import config from 'config';
import Debug from 'debug';

const debug = Debug('sunsetapi:db');

const connection = () => {
  const username = config.get('mongodb.username');
  const password = config.get('mongodb.password');
  const server = config.get('mongodb.server');
  const port = config.get('mongodb.port');
  const database = config.get('mongodb.database');

  const auth = username ? `${username}:${password}@` : '';
  return `mongodb://${auth}${server}:${port}/${database}`;
}

mongoose.connect(connection());
const db = mongoose.connection;

db.on('error', (err) => {
  debug(err);
  console.log('erro to the connected mongodb');
});

db.once('open', (res) => {
  debug('connected to mongodb', res);
  console.log('connected to mongodb');
});
