const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

// Read the sql file
const sql = readFileSync(join(__dirname, 'build.sql')).toString();

// Make the connection
connection
  .query(sql)
  .then((res) => console.log('Build Successfully'))
  .catch((error) => console.log('We got an error', error.stack));
