module.exports = function(sequelize, DataTypes) {
	let Sales = sequelize.define('Sales', {
		salesRep: {
			type: DataTypes.STRING,
			allowNull: false
		},
		commission: {
			type: DataTypes.STRING,
			allowNull: false
		}, 
		approved:{
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		businessName:{
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Sales.associate = function(models) {
		// Sales.hasOne(models.SalesUsers);
		// Sales.hasOne(models.BusinessUsers)
	};

	return Sales;
};