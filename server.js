var express=require('express');
var app=express();
var routes = require('./routes/transaction');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(express.static('public'));

app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true})); 

mongoose.connect('mongodb://localhost:27017/SimpleMoney');
app.get('/',function(req,res){
	res.send('root url');
});

//Code to refer to transaction routes 
app.use('/', routes);

var listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});



/*Code block to require util modul and call send mail 

var notif=require('./util/util.js');

var mymailOpts = {
   from: 'vndbluepi@gmail.com',
   to: 'neeraj.agg90@gmail.com',
   subject: 'testing notification',
   text : 'Hello Testing notificatiokn'
}

console.log("Sending mail");

notif.sendMail(mymailOpts)

console.log(notif.generateOTP());*/