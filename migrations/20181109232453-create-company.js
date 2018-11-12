'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      legal_name: {
        type: Sequelize.STRING
      },
      trade_name: {
        type: Sequelize.STRING
      },
      legal_type: {
        type: Sequelize.STRING
      },
      registration_number: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.JSONB
      },
      phone: {
        type: Sequelize.JSONB
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('company');
  }
};