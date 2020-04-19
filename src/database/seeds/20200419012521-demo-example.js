'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('examples', [{
        example: 'First Example',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        example: 'Second Example',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('examples', null, {});
  }
};
