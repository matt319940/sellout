module.exports = function(sequelize, DataTypes) {
	let Offerings = sequelize.define("Offerings", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		priceRange: {
			type: DataTypes.STRING,
			allowNull: false
		},
		commissions: {
			type: DataTypes.STRING,
			allowNull: false
		},
		business: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Offerings.associate = function(models) {
		// Offerings.belongsTo(models.BusinessUsers);
		// Offerings.hasMany(models.SalesUsers);
	};

	return Offerings;
};