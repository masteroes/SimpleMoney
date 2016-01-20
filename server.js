var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/',function(req,res){
	res.send('root url');
});


var listener=app.listen(process.env.APP_PORT || 4000,function(){
	console.log(process.env.APP_PORT)
	console.log('Listening on port ' + listener.address().port);
});