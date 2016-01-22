var express=require('express');
var app=express();
var login = require('./modules/login/login.js');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');
app.use(express.static('public'));
app.get('/',function(req,res){
	res.send('welcome to Simple Money');
});

mongoose.connect('mongodb://localhost:27017/SimpleMoney');

var listener=app.listen(process.env.APP_PORT || 3000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});

app.post('/login', parseUrlencoded, function(request, response){
	var myBody = request.body;
	var userId = myBody.userId;
	var password = myBody.password;
	var bool = login.authentication(userId, password);	
	if(bool){
		response.json("Login Successful");
	}
	else {
		response.status(201).json("Login Failed");
	}
});
