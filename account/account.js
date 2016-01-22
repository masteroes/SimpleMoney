var shortid = require('shortid');
var express=require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var AccountModel=require('./model/accountModel.js');
var UserModel=require('./model/users.js');
var notifyMail=require('./util/util.js');
var app=express();
mongoose.connect('mongodb://localhost/mydb');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//for fetching list of account details for given user
app.get('/users/:userId/accounts',function(req,res){
	mongoose.model('account').find({userID : req.params.userId}, { _id: 0 ,__v: 0 },function(err,posts){
		if(err){
			res.send("error in fetching account for user : "+req.params.userId);
		}
		res.send(posts);
	});
});
//for fetching account details of given account for a given user
app.get('/users/:userId/accounts/:accountID',function(req,res){
	mongoose.model('account').find({userID : req.params.userId,accountID : req.params.accountID}, { _id: 0 ,__v: 0 },function(err,posts){
		if(err){
			res.send("error in fetching account "+req.params.accountID+" for user : "+req.params.userId);
		}
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
		req.body.dateCreated=new Date();
		var newAccount=new AccountModel(req.body);
		//console.log(newAccount);
		newAccount.save(function(err,AccountModel){
			if(err){
			res.send("error while creating account for user : "+req.params.userId);
		}
			mongoose.model('users').find({username : req.params.userId},function(err,userData){
		if(err){
			res.send(req.params.userId+" invalid credential ");
		}
			var mymailOpts = {
			   from: 'loopbacktraining@gmail.com',
			   to: userData[0].contactinfo.email,
			   subject: 'Account Creation',
			   text : 'Hello '+userData[0].username+', \n\n\n A new account id :'+req.body.accountID +' has been created. '
		}
	    	notifyMail.sendMail(mymailOpts) 
		});
			res.send(AccountModel);
		});
    }
});
app.listen(process.env.PORT||3000,function(){
	console.log('Example app listening on port 3000!');
});