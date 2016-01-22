var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
	date:{type:String,required: true},
  	account:{type:String,required: true},
	amount:{type:Number,required: true},
  	txtype:{type:String,required: true},
  	accountHolder:{type:String},
  	description:{type:String}
 });


var transactions= mongoose.model('transactions',transactionSchema);
module.exports = transactions;