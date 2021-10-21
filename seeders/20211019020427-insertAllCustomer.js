"use strict";
const { hashPass } = require("../helpers/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          name: "andre",
          password: hashPass("12345"),
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "andri",
          password: hashPass("12345"),
          role: "customer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "anton",
          password: hashPass("12345"),
          role: "customer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "antonio",
          password: hashPass("12345"),
          role: "customer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "anto",
          password: hashPass("12345"),
          role: "customer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fanly",
          password: hashPass("12345"),
          role: "customer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
