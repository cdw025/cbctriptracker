require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost/staging_cbctriptracker'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
  }
}
}; 
 
 