'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     // Insert teachers with user_id associated
     await queryInterface.bulkInsert('teachers', [
      {
        dni: 'T12345678',
        name: 'John',
        last_name: 'Doe',
        date_of_birth: new Date('1985-04-12'),
        user_id: 1, // Assuming user with ID 1 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: 'T87654321',
        name: 'Jane',
        last_name: 'Smith',
        date_of_birth: new Date('1988-07-22'),
        user_id: 2, // Assuming user with ID 2 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
     // Delete inserted teacher records
    await queryInterface.bulkDelete('teachers', null, {});
  }
};
