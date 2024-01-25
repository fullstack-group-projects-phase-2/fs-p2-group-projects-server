const { Message } = require("../models/index");

class MessageController {
  static async allMessage(req, res, next) {
    try {
      const messages = await Message.findAll();

      res.status(200).json(messages);
    } catch (error) {
      next(error);
    }
  }

  static async addMessage(req, res, next) {
    try {
      const { text } = req.body;

      const newMessage = await Message.create({ text, member: req.user.id });

      res.status(201).json(newMessage);
    } catch (error) {
      next(error);
    }
  }

  static async createMessage(payload) {
    Message.create(payload);
  }
}

module.exports = MessageController;
