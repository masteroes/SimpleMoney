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
	//validate amount in account
	//update from account
	//create tranc1
	//create trans 2
});


router.post('/sendmoney', function(req, res) {
console.log(req.body);
//get from
//get to

var tx1 = new transaction(req.body);
		tx1.save(function(err,transactions){
			if(err)
				res.send(err);
			else
				res.send(transactions);
		});
	//validate amount in account
	//update from account
	//create tranc1
	//create trans 2
});

	
module.exports = router;



