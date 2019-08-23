// The query for adding a city to the table in the DB
const addToCities = require('../database/queries/addCity');

const addCity = (req, res) => {
  addToCities(req.body)
    .then((result) => res.redirect('/'))
    .catch((error) => console.log(error));
};

module.exports = addCity;
