var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username:{type:String,required: true, unique: true},
  password:{type:String,required: true},
  contactinfo:{
    phone : String,
    email : {type:String,required: true, unique: true}
  },
  addressinfo: {
    add1: String,
    add2: String,
    city: String,
    state: String,
    pin: String
  },
  personalinfo:{
    name: String,
    age: Number,
    sex: String
  }
});
usersSchema.plugin(uniqueValidator);
var users= mongoose.model('users',usersSchema);
module.exports = users;
