'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert students with teacher_id associated
    await queryInterface.bulkInsert('students', [
      {
        dni: '123456789',
        name: 'Alice',
        last_name: 'Johnson',
        date_of_birth: new Date('2000-01-01'),
        teacher_id: 1, // Assuming teacher with ID 1 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '987654321',
        name: 'Bob',
        last_name: 'Smith',
        date_of_birth: new Date('2002-02-02'),
        teacher_id: 2, // Assuming teacher with ID 2 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
      // Delete inserted student records
      await queryInterface.bulkDelete('students', null, {});
  }
};
