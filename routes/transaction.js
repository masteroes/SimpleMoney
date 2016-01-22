var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var transaction = require('../models/transaction');

router.get('/transaction', function(req, res) {
	console.log('Getting transaction details');

});

router.get('/transaction/:txId', function(req, res) {
	console.log('Getting transaction details for'+ txId);


});
router.get('/transaction/:accId/:type', function(req, res) {
	

});

router.post('/sendmoney', function(req, res) {
console.log(req.body);
	var tx1 = new transaction(req.body);
		tx1.save(function(err,transactions){
			if(err)
				res.send(err);
			else
				res.send(transactions);
		});
	
});

	/*res.send("Just sent money"); 
	/var date=new Date();
	date:{type:Date,required: true},
  	accountHolder:{type:String,required: true},
  	description: {type:String},
 	amount:{type:Number,required: true},
	*/
	



	//to aac id, 
	//from acc id
	//amount
	//description
	//validate amount in account
	//update from account
	//create tranc1
	//create trans 2

module.exports = router;



