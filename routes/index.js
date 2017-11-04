var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/licenses/:city', db.getLicensesForCity);


module.exports = router;
