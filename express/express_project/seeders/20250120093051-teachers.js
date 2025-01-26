'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     // Insert teachers with user_id associated
     await queryInterface.bulkInsert('teachers', [
      {
        dni: 'T12345678',
        name: 'Maria',
        last_name: 'Perez',
        date_of_birth: new Date('1985-04-12'),
        user_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: 'T87654321',
        name: 'Iker',
        last_name: 'Marco',
        date_of_birth: new Date('1988-07-22'),
        user_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: 'T85596329',
        name: 'Gordon',
        last_name: 'Smith',
        date_of_birth: new Date('1988-07-22'),
        user_id: 3, 
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
