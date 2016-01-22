var express=require('express');
var User=require('./userMgmt/models/users.js');
var app=express();
var mongoose=require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/simplemoney');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/users',function(req,res){	
	console.log("Body Before");
	console.log("Body is ",req.body.username);	
	var user = new User({"username":req.body.username,"password":req.body.password,"contactinfo":{"phone":req.body.contactinfo.phone,
	"email":req.body.contactinfo.email},"addressinfo":{"add1":req.body.addressinfo.add1},
	"personalinfo":{"name":req.body.personalinfo.name}});
	console.log('Before Save');
 	user.save(function(err,users){	
		if(err)
			res.send(err);
		else
    	res.send(users);
    });
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
	console.log(process.env.APP_PORT)
});
