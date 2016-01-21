var shortid = require('shortid');
var express=require('express');
var mongoose=require('mongoose');
var app=express();
var AccountModel=require('./accountModel.js');
//for fetching list of account details for given user
app.get('/users/:userId/accounts',function(req,res){
	mongoose.model('account').find({userID : req.params.userId},function(err,posts){
		res.send(posts);
	});
});
//for fetching account details of given account for a given user
app.get('/users/:userId/accounts/:accountID',function(req,res){
	mongoose.model('account').find({userID : req.params.userId,accountID : req.params.accountID},function(err,posts){
		res.send(posts);
	});
});
//for adding new account of a given user
app.post('/users/:userId/accounts',function(req,res){
	if(req.body.userID!=req.params.userId){
		res.status(403).json('you can not create account for other user');
		res.end();
	}else{
		req.body.accountID=shortid.generate();
		var newAccount=new AccountModel(req.body));
		newAccount.save(function(err,AccountModel){
			res.send(AccountModel);
		});
    }
});