"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate(models) {
      Member.belongsTo(models.User, { foreignKey: "UserId" });
      Member.belongsTo(models.Room, { foreignKey: "RoomId" });
      Member.hasMany(models.Message, { foreignKey: "MemberId" });
    }
  }
  Member.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RoomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Member",
    }
  );
  return Member;
};
