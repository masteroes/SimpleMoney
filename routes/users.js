var express=require('express');
var User=require('./../models/users.js');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var validator = require("email-validator");
var user_routes = express.Router();


user_routes.use(bodyParser.json());
user_routes.use(bodyParser.urlencoded({extended: true}));

user_routes.post('/users',function(req,res){
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


user_routes.get('/users',function(req,res){
	mongoose.model('users').find(function(err,users){
	res.send(users);
	});
});

user_routes.get('/users/:username',function(req,resp){
	mongoose.model('users').find({ username: req.params.username },function(err,users){
	resp.send(users);
	});
});

module.exports =user_routes;