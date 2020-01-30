require('dotenv').config();

module.exports = {
	"development": {
		"username": "root",
		"password": process.env.DB_PASSWORD,
		"database": "project_three",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": false
	},
	"test": {
		"username": "root",
		"password": null,
		"database": "database_test",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": false
	},
	"production": {
		"username": "y5z4crqwnlqdzhyi",
		"password": "ck5i1gdvr3qzdy0i",
		"database": "n7f3xzn0aanygkvu",
		"host": "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		"dialect": "mysql",
		"operatorsAliases": false
	}
};
