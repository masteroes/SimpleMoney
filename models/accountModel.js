var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var accountSchema= new Schema({
	userID:{ type: String, select: true, required: true },
	accountID:{ type: String, unique: true, select: true, required: false },
	type:{ type: String, select: true, required: true },
	amount:{ type: Number, select: true, default: 0.0},
	dateCreated:{ type: Date, select: true, required: false }
});
var model=mongoose.model('account',accountSchema);
module.exports=model;