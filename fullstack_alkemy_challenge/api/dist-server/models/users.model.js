"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      required: true,
      validate: {
        notNull: {
          msg: "Please enter your email"
        },
        isEmail: true,
        isLowercase: true
      }
    },
    hashedPassword: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        is: /^[0-9a-f]{64}$/i,
        len: [8, 64],
        notNull: {
          msg: "Please enter your password"
        }
      }
    }
  });
  return User;
};