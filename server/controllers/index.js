const express = require('express');

const cities = require('./cities');
const addCity = require('./postCity');

const router = express.Router();

router.get('/cities', cities);
router.post('/add-city', addCity);

module.exports = router;
