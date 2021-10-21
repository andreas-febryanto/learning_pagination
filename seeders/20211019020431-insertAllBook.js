"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          name: "eloquent javascript",
          genre: "Tech",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Art of Computer Programming",
          genre: "Tech",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Head First Design Patterns",
          genre: "Tech",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: " A Handbook of Agile Software Craftsmanship",
          genre: "Tech",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Fine Art of Small Talk",
          genre: "Communication",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "How to Master Almost Anything",
          genre: "Mastery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
