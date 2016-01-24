var mongoose = require('mongoose');
var Users = require('./model/users');
module.exports = {
		authentication : function(userId, pwd, callback) {
			Users.find({username:userId, password:pwd},function(err,user){
					if(user.length!==0)
					{
						callback(true);
					}
					else {
						callback(false);
					}
			});
		}
	};
