const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.Room);
      Message.belongsTo(models.User);
    }
  }

  Message.init(
    {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "text is required.",
          },
          notEmpty: {
            msg: "text is required.",
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
      RoomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "room ID is required.",
          },
          notEmpty: {
            msg: "room ID is required.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );

  return Message;
};
