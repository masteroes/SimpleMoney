var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var accountSchema= new Schema({
	userID:{ type: String, select: true, required: true },
	accountID:{ type: String, unique: true, select: true, required: true },
	type:{ type: String, select: true, required: true },
	amount:{ type: Number, select: true, default: 0.0},
	dateCreated:Date
});
var model=mongoose.model('account',accountSchema);
module.exports=model;