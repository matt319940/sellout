const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
	const SalesUsers = sequelize.define("SalesUsers", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
			// unique: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
			// unique: true,
			// validate: {
			// 	isEmail: true
			// }
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		accountType: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'Sales'
		}
	});

	SalesUsers.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	};

	SalesUsers.addHook("beforeCreate", function(user) {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
	});

	SalesUsers.associate = function(models) {
		// SalesUsers.hasMany(models.Offerings);
		// SalesUsers.hasMany(models.Leads);
		// SalesUsers.hasMany(models.Sales);
	};

	return SalesUsers;
};