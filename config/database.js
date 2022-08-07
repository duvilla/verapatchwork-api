const path = require('path');
const parse = require('pg-connection-string').parse;


module.exports = ({ env }) => {
  const dbClient = env('DATABASE_CLIENT', 'postgres')
  const postgresConfig = parse(env('DATABASE_URL'))
  
  const postgresConnection = {
    client: 'postgres',
    connection: {
      ...postgresConfig,
      ssl: env.bool('DATABASE_SSL', true),
    },
  }

  const sqliteConnection = {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  }

  const config = {
    connection: dbClient === 'postgres' ? postgresConnection : sqliteConnection
  }

  return config
};