var express=require('express');
var login = require('./../models/login.js');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: true});
var mongoose = require('mongoose');
var router = express.Router();

//Login route calling login module
router.post('/login', parseUrlencoded, function(request, response){
	var myBody = request.body;
	var userId = myBody.userId;
	var password = myBody.password;
	login.authentication(userId, password, function(bool){
		if(bool){
			response.json("Login Successful");
		}
		else {
			response.status(201).json("Login Failed");
		}
	});
});

module.exports =router;