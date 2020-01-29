var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

passport.use(new LocalStrategy(
	{usernameField: "username"}, function(username,password,done) {

	// 	db.Users.findOne({
	// 		where: {
	// 			username: username
	// 		}
	// 	}).then((user) => {
	// 		console.log(user.accountType);
	// 		if(user.accounType == "Sales"){
	// 			db.SalesUsers.findOne({
	// 				where: {
	// 					username: username
	// 				}
	// 			}).then((user) => {
	// 				if(user && user.validPassword(password)){
	// 					return done(null, user);
	// 				}
	// 				else if(!user) {                
	// 					return done(null,false,{
	// 						message: "Incorrect username."
	// 					});
	// 				}
	// 				else if(!user.validPassword(password)) {
	// 					return done(null,false,{
	// 						message: "Incorrect password."
	// 					});
	// 				}
	// 			});
	// 		}
	// 		else{
	// 			db.BusinessUsers.findOne({
	// 				where: {
	// 					username: username
	// 				}
	// 			}).then((user) => {
	// 				if(user && user.validPassword(password)){
	// 					return done(null, user);
	// 				}
	// 				else if(!user) {                
	// 					return done(null,false,{
	// 						message: "Incorrect username."
	// 					});
	// 				}
	// 				else if(!user.validPassword(password)) {
	// 					return done(null,false,{
	// 						message: "Incorrect password."
	// 					});
	// 				}
	// 			});
	// 		}
	// 	})
	// }

		db.SalesUsers.findOne({
			where: {
				username: username
			}
		}).then((user) => {
			if(user && user.validPassword(password)){
				return done(null, user);
			}
			else if(!user) {                
				db.BusinessUsers.findOne({
					where: {
						username: username
					}
				}).then((user) => {
					if(user && user.validPassword(password)){
						return done(null, user);
					}
					else if(!user) {                
						return done(null,false,{
							message: "Incorrect username."
						});
					}
					else if(!user.validPassword(password)) {
						return done(null,false,{
							message: "Incorrect password."
						});
					}
				});
			}
			else if(!user.validPassword(password)) {
				return done(null,false,{
					message: "Incorrect password."
				});
			}
		});


	}
));


passport.serializeUser((user,cb) => {
	cb(null,user);
});

passport.deserializeUser((obj,cb) => {
	cb(null,obj);
});

module.exports = passport;