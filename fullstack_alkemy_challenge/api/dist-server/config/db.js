"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _env = _interopRequireDefault(require("./env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize.Sequelize(_env["default"].DATABASE, _env["default"].USERNAME, _env["default"].PASSWORD, {
  host: _env["default"].HOST,
  dialect: _env["default"].DIALECT,
  define: {
    underscored: true,
    freezeTableName: true
  }
}); // Connect all the models/tables in the database to a db object,
//so everything is accessible via one object

var db = {};
db.Sequelize = _sequelize.Sequelize;
db.sequelize = sequelize; //Models/tables

db.operations = require("../models/operations.model.js")(sequelize, _sequelize.Sequelize);
db.categories = require("../models/categories.model.js")(sequelize, _sequelize.Sequelize);
db.users = require("../models/users.model.js")(sequelize, _sequelize.Sequelize); //Relations

db.categories.belongsTo(db.operations);
db.operations.hasMany(db.categories);
var _default = db;
exports["default"] = _default;