const express = require('express');
const router = express.Router();
const peopleRoute = require('./people');

/* Same URL as in people.js */
router.use('/people', peopleRoute);

module.exports = router;
