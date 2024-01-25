const { Room } = require("../models/index");

class RoomController {
  static async allRoom(req, res, next) {
    try {
      const rooms = await Room.findAll();

      res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  }

  static async createRoom(req, res, next) {
    try {
      const { name } = req.body;

      const newRoom = await Room.create({ name });

      res.status(201).json(newRoom);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoomController;
