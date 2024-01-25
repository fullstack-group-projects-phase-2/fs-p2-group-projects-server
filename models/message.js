const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.Member);
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
      MemberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "memberId is required.",
          },
          notEmpty: {
            msg: "memberId is required.",
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
