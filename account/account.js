var express=require('express');
var mongoose=require('mongoose');
var app=express();
var AccountModel=require('./accountModel.js');
mongoose.connect('mongodb://localhost/testdb');
app.get('/users/:userId/accounts',function(req,res){
	mongoose.model('account').find({},function(err,posts){
		res.send(posts);
	});
});

app.get('/users/:userId/accounts/:accountID',function(req,res){
	mongoose.model('account').find({userID : req.params.userId,accountID : req.params.accountID},function(err,posts){
		res.send(posts);
	});
});
app.post('/users/:userId/accounts',function(req,res){
	var newAccount=new AccountModel({
	userID:req.params.userId,
	accountID:req.params.userId+'_'+Math.floor(100000 + Math.random() * 900000),
	type:"Saving",
	amount:0.0,
	dateCreated:new Date()
});
	newAccount.save(function(err,AccountModel){
		res.send(AccountModel);
	})
});
app.listen(process.env.PORT||3000,function(){
	console.log('Example app listening on port 3000!');
});