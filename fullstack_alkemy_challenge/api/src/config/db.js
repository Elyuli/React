import { Sequelize, DataTypes } from "sequelize";
import env from "./env";

const sequelize = new Sequelize(env.DATABASE, env.USERNAME, env.PASSWORD, {
	host: env.HOST,
	dialect: env.DIALECT,
	define: {
		underscored: true,
		freezeTableName: true,
	},
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.operations = require("../models/operations.model.js")(sequelize, Sequelize);
db.categories = require("../models/categories.model.js")(sequelize, Sequelize);
db.users = require("../models/users.model.js")(sequelize, Sequelize);

//Relations
db.categories.belongsTo(db.operations);
db.operations.hasMany(db.categories);

export default db;
