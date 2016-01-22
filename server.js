var express=require('express');
var User=require('./userMgmt/models/users.js');
var app=express();
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var validator = require("email-validator");


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/simplemoney');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/users',function(req,res){
	if(!validator.validate(req.body.contactinfo.email)){
		res.send("Email is not valid");
	}else{
		var user = new User(req.body);
		user.save(function(err,users){
			if(err)
				res.send(err);
			else
				res.send(users);
		});
	}
});


app.get('/users',function(req,res){
	mongoose.model('users').find(function(err,users){
	res.send(users);
	});
});

app.get('/users/:username',function(req,resp){
	mongoose.model('users').find({ username: req.params.username },function(err,users){
	resp.send(users);
	});
});

app.listen(process.env.APP_PORT || 4000,function(){
	//console.log(process.env.APP_PORT)
});
