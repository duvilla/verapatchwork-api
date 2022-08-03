const path = require('path');

module.exports = ({ env }) => {
  const dbClient = env('DATABASE_CLIENT', 'postgres')

  const postgresConnection = {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'verapatchwork'),
      user: env('DATABASE_USERNAME', 'verapatchwork'),
      password: env('DATABASE_PASSWORD', 'verapatchwork'),
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