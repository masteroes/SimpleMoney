var express=require('express');
var app=express();
var mongoose=require('mongoose');

var users=require('./userMgmt/model/users.js');
var User = require('./userMgmt/models/user');

app.use(express.static('public'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/users',function(req,res){
	mongoose.model('users').find(function(err,users){
	res.send(users);
	});
});

app.post('/posts/:userId',function(req,res){
	mongoose.model('posts').find({user: req.params.userId},function(err,posts){
	res.send(posts);
	});
});

mongoose.connect('mongodb://localhost:27017/test');

app.post('/registration', parseUrlencoded,function(req,res){
  console.log("parameters : ",req.body);
	//console.log("registering user",req.body.addressinfo.add1);
	var user = new User({"username":req.body.username,"password":req.body.password,"contactinfo":{"phone":req.body.contactinfo.phone,
	"email":req.body.contactinfo.email},"addressinfo":{"add1":req.body.addressinfo.add1},
	"personalinfo":{"name":req.body.personalinfo.name}});

  user.save(function(err,users){
		console.log('saving...');
		if(err)
			res.send(err);
		else
    	res.send(users);
  });
});

var listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});
