var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var transaction = require('../models/transaction');

router.get('/transactions', function(req, res) {
	mongoose.model('transactions').find(function(err,transaction){
	res.send(transaction);	
});
});

router.post('/create', function(req, res) {
console.log(req.body);
	var tx = new transaction(req.body);
		tx.save(function(err,transactions){
			if(err)
				res.send(err);
			else
				res.send(transactions);
		});
	});


router.post('/sendmoney', function(req, res) {
console.log(req.body);
//get from
//get to
//create 2 transactions using create remote method

var tx1 = new transaction(req.body);
		tx1.save(function(err,transactions){
			if(err)
				res.send(err);
			else
				res.send(transactions);
		});
});

	
module.exports = router;



