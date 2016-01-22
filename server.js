var express=require('express');
var routes = require('./routes/transaction');
//var login = require('./modules/login/login.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app=express();
var parseUrlencoded = bodyParser.urlencoded({extended: false});
app.use(express.static('public'));

app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true}));

//mongoose.connect('mongodb://localhost:27017/SimpleMoney');
app.get('/',function(req,res){
	res.send('root url');
});

var routes = require('./routes/transaction');
var user_routes = require('./routes/users');
var login_routes = require('./routes/login');


// DB Connection
mongoose.connect('mongodb://localhost:27017/simplemoney');


//Code to refer to transaction routes
app.use('/', routes);
app.use('/', user_routes);
app.use('/', login_routes);


listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT);
	console.log("server running on PORT"+listener.address().port );
});