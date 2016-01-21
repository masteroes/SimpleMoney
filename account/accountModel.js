var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var accountSchema= new Schema({
	userID:String,
	accountID:String,
	type:String,
	amount:Number,
	dateCreated:Date
});
var model=mongoose.model('account',accountSchema);
module.exports=model;