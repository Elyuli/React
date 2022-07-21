"use strict";

module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      validate: {
        is: /^[a-z]+$/i,
        notNull: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        is: /^[a-z]+$/i,
        notNull: true
      }
    }
  });
  return Category;
};