module.exports = (sequelize, DataTypes) => {
	const Operation = sequelize.define("Operation", {
		concepto: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
			validate: {
				is: /^[a-z]+$/i,
				notNull: true,
			},
		},
		monto: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			required: true,
			validate: { isNumeric: true },
		},
		fecha: {
			type: DataTypes.DATE,
			required: true,
			defaultValue: DataTypes.NOW,
		},
		tipo: {
			type: DataTypes.STRING,
			required: true,
			allowNull: false,
		},
	});
	return Operation;
};
