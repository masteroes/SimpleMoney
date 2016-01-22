var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Schema = mongoose.Schema;


var transactionSchema = new Schema({
	date: Date,
	accountHolder: String,
	description: String,
	amount: Number,
	type: String
});

var transaction = mongoose.model('transaction', transactionSchema);

router.get('/transaction', function(req, res) {
	console.log('Getting transaction details');

});

router.get('/transaction/:txId', function(req, res) {
	console.log('Getting transaction details for'+ txId);


});
router.get('/transaction/:accId/:type', function(req, res) {
	

});


router.post('/sendmoney', function(req, res) {
	("Just sent money"); 

});

module.exports = router;
