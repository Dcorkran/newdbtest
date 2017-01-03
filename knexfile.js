module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/test1'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
