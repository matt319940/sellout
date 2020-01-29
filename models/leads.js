module.exports = function(sequelize, DataTypes) {
	let Leads = sequelize.define("Leads", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	Leads.associate = function(models) {
		// Leads.hasMany(models.SalesUsers);
		// Leads.belongsTo(models.BusinessUsers);
	};

	return Leads;
};