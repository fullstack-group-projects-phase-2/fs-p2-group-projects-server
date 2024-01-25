const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.belongsTo(models.User);
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
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "user ID is required.",
          },
          notEmpty: {
            msg: "user ID is required.",
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
