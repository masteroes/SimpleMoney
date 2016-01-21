var express=require('express');
var app=express();
var mongoose=require('mongoose');

var users=require('./userMgmt/model/users.js');

app.use(express.static('public'));
mongoose.connect('mongodb://localhost:27017/simplemoney');

app.get('/users',function(req,res){
	console.log('Inside GET');
	mongoose.model('users').find(function(err,users){
	res.send(users);
	});
});

app.get('/users/:username',function(req,resp){
	//resp.send('Helo World');
	console.log("UserName is ",req.params.username);
	mongoose.model('users').find({ username: req.params.username },function(err,users){
	resp.send(users);
	});	
});

var listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});