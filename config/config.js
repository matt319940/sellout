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
		"username": process.env.JAWS_USER,
		"password": process.env.JAWS_PASS,
		"database": process.env.JAWS_DATABASE,
		"host": process.env.JAWS_HOST,
		"dialect": "mysql",
		"operatorsAliases": false
	}
};
