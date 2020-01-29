module.exports = function(sequelize, DataTypes) {
	const Users = sequelize.define("Users", {
		accountType: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		// id: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false
		// }
	});

	return Users;
};