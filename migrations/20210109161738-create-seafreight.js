'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seafreights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      arival: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      container20: {
        type: Sequelize.STRING
      },
      container40: {
        type: Sequelize.STRING
      },
      m3ton: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Seafreights');
  }
};