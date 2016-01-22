var mongoose = require('mongoose');
var Users = require('./users');

module.exports = {
	authentication : function(userId, pwd, callback) {
		console.log('User ID is ',userId, 'pwd is ',pwd );
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