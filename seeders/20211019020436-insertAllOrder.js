"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          CustomerId: 1,
          BookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CustomerId: 2,
          BookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CustomerId: 3,
          BookId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CustomerId: 4,
          BookId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CustomerId: 5,
          BookId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CustomerId: 6,
          BookId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
