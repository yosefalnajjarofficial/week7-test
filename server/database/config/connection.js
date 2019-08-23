const { Pool } = require('pg');
require('env2')('./config.env');

if (!process.env.DB_URL) throw new Error('There is url for the database');

const options = {
  connectionString: process.env.DB_URL,
  ssl: true,
};

module.exports = new Pool(options);
