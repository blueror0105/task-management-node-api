'use strict';

const data = [{
  id: 1,
  userId: 1,
  taskId: 1,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  taskId: 1,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  taskId: 2,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  userId: 2,
  taskId: 3,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TaskMembers', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TaskMembers', null, {});
  }
};