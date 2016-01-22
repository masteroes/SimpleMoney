var mongoose = require('mongoose');
var express=require('express');
var app=express();

var user_routes = require('./routes/users');
var login_routes = require('./routes/login');


// DB Connection
mongoose.connect('mongodb://localhost:27017/simplemoney');


//Code to refer to transaction routes
app.use('/', user_routes);
app.use('/', login_routes);


listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT);
});