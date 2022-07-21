module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define("Category", {
		category: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
			unique: true,
			validate: { is: /^[a-z]+$/i, notNull: true },
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
			validate: { is: /^[a-z]+$/i, notNull: true },
		},
	});
	return Category;
};
