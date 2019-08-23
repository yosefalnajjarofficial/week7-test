const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl;

if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DB_URL;
} else {
  // The heroku database url
  dbUrl = process.env.DATABASE_URL;
}

if (!dbUrl) throw new Error('There is url for the database');

const options = {
  connectionString: dbUrl,
  ssl: true,
};

module.exports = new Pool(options);
