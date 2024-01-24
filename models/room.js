const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.belongsToMany(models.User, {
        through: "Member",
        foreignKey: "RoomId",
        as: "members",
      });
      Room.hasMany(models.Member, { foreignKey: "RoomId" });
    }
  }
  Room.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required.",
          },
          notEmpty: {
            msg: "Name is required.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
