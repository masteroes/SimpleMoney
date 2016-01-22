var express=require('express');
var app=express();
var routes = require('./routes/transaction');
var login = require('./modules/login/login.js');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');
app.use(express.static('public'));
app.get('/',function(req,res){
	res.send('root url');
});

// DB Connection
mongoose.connect('mongodb://localhost:27017/SimpleMoney');


//Code to refer to transaction routes
app.use('/', routes);


var listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});

//Login route calling login module
app.post('/login', parseUrlencoded, function(request, response){
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


/*Code block to require util modul and call send mail

var notif=require('./util/util.js');

var mymailOpts = {
   from: 'vndbluepi@gmail.com',
   to: 'neeraj.agg90@gmail.com',
   subject: 'testing notification',
   text : 'Hello Testing notification'
}

console.log("Sending mail");

notif.sendMail(mymailOpts)

console.log(notif.generateOTP());*/
