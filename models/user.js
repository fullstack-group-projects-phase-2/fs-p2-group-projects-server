"use strict";
const { hashPassword } = require("../helpers/index");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Member);
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "fullname is required.",
          },
          notEmpty: {
            msg: "fullname is required.",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "email must be unique. Email has been used.",
        },
        validate: {
          notNull: {
            msg: "email is required.",
          },
          notEmpty: {
            msg: "email is required.",
          },
          isEmail: {
            args: true,
            msg: "email must be email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "password is required.",
          },
          notEmpty: {
            msg: "password is required.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((el) => {
    el.password = hashPassword(el.password);
  });

  return User;
};
