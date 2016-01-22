var mongoose = require('mongoose');
var Users = require('./model/users');
var 	flag=false;
module.exports = {

		authentication : function(userId, pwd) {
			Users.find({username:userId, password:pwd},function(err,user){
					if(user.length!=0)
					{

						flag = true;
						console.log("inside" + flag);
					}

			});
			console.log(flag);
			return flag;
		}
	};
