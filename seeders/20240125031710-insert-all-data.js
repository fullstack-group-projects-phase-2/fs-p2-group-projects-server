"use strict";
const { hashPassword } = require("../helpers");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require("../data/user.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = hashPassword(el.password);
      return el;
    });

    await queryInterface.bulkInsert("Users", users, {});

    const rooms = require("../data/room.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert("Rooms", rooms, {});

    const messages = require("../data/message.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert("Messages", messages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete("Rooms", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete("Messages", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
