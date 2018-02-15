// database/index.js
const knex = require('knex')({
    client:'mysql',
    connection: {
      host: 'localhost',
      //port: '3306',
      database: 'a1602411',
      user: 'a1602411',
      password: 'puNAcD57j'
    }
});

module.exports = knex;
