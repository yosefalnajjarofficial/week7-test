const connection = require('../config/connection');

const getCities = () => connection.query('SELECT * FROM cities');

module.exports = getCities;
