require('dotenv').config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     process.env.DB_HOST     || 'localhost',
      database: process.env.DB_NAME     || 'peerstreet',
      user:     process.env.DB_USER     || 'user',
      password: process.env.DB_PASSWORD || 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:     process.env.DB_HOST     || 'localhost',
      database: process.env.DB_NAME     || 'peerstreet',
      user:     process.env.DB_USER     || 'user',
      password: process.env.DB_PASSWORD || 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

}
