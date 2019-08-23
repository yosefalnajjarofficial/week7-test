const connection = require('../config/connection');

const addCity = (formData) => {
  const { name, city } = formData;
  const sql = {
    text: 'INSERT INTO cities (name, city) VALUES ($1, $2)',
    values: [name, city],
  };
  return connection.query(sql);
};

module.exports = addCity;
