const getCities = require('../database/queries/getCities');

const displayCities = (req, res) => {
  getCities()
    .then((result) => res.send(result.rows))
    .catch((error) => console.log(error));
};

module.exports = displayCities;
