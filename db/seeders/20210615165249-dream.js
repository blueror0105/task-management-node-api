'use strict';

const data = [{
  id: 1,
  companyId: 1,
  statusId: null,
  title: "title_1",
  description: "description_1",
  dueDate: new Date(),
  priority: null,
  budget: 10,
  isDeleted: false,
  isDone: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  companyId: 1,
  statusId: null,
  title: "title_1",
  description: "description_1",
  dueDate: new Date(),
  priority: null,
  budget: 10,
  isDeleted: false,
  isDone: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  companyId: 1,
  statusId: null,
  title: "title_1",
  description: "description_1",
  dueDate: new Date(),
  priority: null,
  budget: 10,
  isDeleted: false,
  isDone: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  companyId: 2,
  statusId: null,
  title: "title_1",
  description: "description_1",
  dueDate: new Date(),
  priority: null,
  budget: 10,
  isDeleted: false,
  isDone: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 5,
  companyId: 3,
  statusId: null,
  title: "title_1",
  description: "description_1",
  dueDate: new Date(),
  priority: null,
  budget: 10,
  isDeleted: false,
  isDone: true,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dreams', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dreams', null, {});
  }
};
