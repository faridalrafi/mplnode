'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Landfreightcharters', {
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
      colt: {
        type: Sequelize.STRING
      },
      fuso: {
        type: Sequelize.STRING
      },
      tronton12: {
        type: Sequelize.STRING
      },
      trailer20: {
        type: Sequelize.STRING
      },
      trailer40: {
        type: Sequelize.STRING
      },
      lowbed: {
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
    await queryInterface.dropTable('Landfreightcharters');
  }
};