var express = require('express');
var app = express();
var mongoose = requires('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new Schema({
	date: new Date(),
	to: Number,
	from: Number,
	amount: Number,
	type: String
});

var transaction = mongoose.model('transaction', transactionSchema);

module.export = transaction;


var routes = require('./routes');

app.get('/transaction', function(req, res) {
	console.log('Getting transaction details');



});


app.get('/transaction/:txId', function(req, res) {
	console.log('Getting transaction details for'+ txId);

	
});
app.get('/transaction/:accId/:type', function(req, res) {

	

});


app.post('/sendmoney', function(req, res) {
	

});