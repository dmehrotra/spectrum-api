var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/licenses/:city', db.getLicensesForCity);

router.get('/licenses/:lat/:lon', db.getLicensesForLatLon);

module.exports = router;
