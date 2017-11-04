var promise = require('bluebird');

var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://dhruv:@localhost:5432/fcc';
var db = pgp(connectionString);

function getLicensesForLatLon(req, res, next) {
	var lat = req.params.lat;
	var lon = req.params.lon;
	db.any('select * from fcclicenses where fcclicenses.loc_city LIKE $1',city).then(function (data) {
		res.status(200).json({
		      status: 'success',
		      data: data,
		      message: 'Retrieved ONE puppy'
		});
	 }).catch(function (err) {
		 return next(err);
	});
}
function getLicensesForCity(req, res, next) {
	var city = req.params.city;
	db.any('select * from fcclicenses where fcclicenses.loc_city LIKE $1',city).then(function (data) {
		res.status(200).json({
		      status: 'success',
		      data: data,
		      message: 'Retrieved ONE puppy'
		});
	 }).catch(function (err) {
		 return next(err);
	});
}
module.exports = {
	getLicensesForCity: getLicensesForCity,
};
