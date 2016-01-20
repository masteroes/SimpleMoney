var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});
app.get('/blocks',function(req,res){
	var block=["test","test3"];
	res.send(block);
});
app.post('/postData',function(req,res){
	console.log(req.name);
});

var listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});