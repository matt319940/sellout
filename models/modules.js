module.exports = function(sequelize, DataTypes) {
	let Modules = sequelize.define("Modules", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		time: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		// completed:{
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	get(){
		// 		return this.getDataValue('completed').split(';')
		// 	},
		// 	set(val){
		// 		this.setDataValue('completed',val.join(';'));
		// 	}
		// },
		// offeringRequirement: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	get(){
		// 		return this.getDataValue('offeringRequirement').split(';')
		// 	},
		// 	set(val){
		// 		this.setDataValue('offeringRequirement',val.join(';'));
		// 	}
		// },
	});


	return Modules;
};