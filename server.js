var express=require('express');
var app=express();
var mongoose=require('mongoose');

var users=require('./userMgmt/model/users.js');

app.use(express.static('public'));

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


var listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});