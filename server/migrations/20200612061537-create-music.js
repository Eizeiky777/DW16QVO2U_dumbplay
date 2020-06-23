'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Musics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      attach: {
        type: Sequelize.STRING
      },
      artistId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Artists',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Musics');
  }
};



// categoryId: {
  // type: Sequelize.INTEGER,
  // references:{
  //   model:'Categories',
  //   key:'id'
  // },
  // onUpdate:'cascade',
  // onDelete:'cascade'
// },
