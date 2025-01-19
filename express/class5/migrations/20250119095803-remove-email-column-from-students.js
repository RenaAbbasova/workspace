'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop the email column from the students table
    await queryInterface.removeColumn('students', 'email');
  },

  async down(queryInterface, Sequelize) {
    // In case you need to rollback, this will add the email column back
    await queryInterface.addColumn('students', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};
