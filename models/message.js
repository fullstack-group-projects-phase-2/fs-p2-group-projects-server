const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }

  Message.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "UserId is required.",
          },
        },
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Message is required.",
          },
          notEmpty: {
            msg: "Message is required.",
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
