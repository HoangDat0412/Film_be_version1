'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      des: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      yRelease: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      director: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      src: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      srcurl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      src2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      trailer: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      trailerurl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      img: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imgurl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      views: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      country: {
        type: Sequelize.STRING,
        allowNull:false
      },
      time: {
        type: Sequelize.STRING,
        allowNull:false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Films');
  }
};