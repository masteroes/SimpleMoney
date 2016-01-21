var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username:String,
  password:String,
  contactinfo:{
    phone : String,
    email : String
  },
  addressinfo: {
    add1: String
  },
  personalinfo:{
    name: String
  }
});
var users= mongoose.model('users',usersSchema);
module.exports = users;