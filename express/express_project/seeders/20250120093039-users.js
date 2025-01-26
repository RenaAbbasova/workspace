'use strict';

const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash('maria123', 10);
    const hashedPassword2 = await bcrypt.hash('iker123', 10);
    const hashedPassword3 = await bcrypt.hash('admin123', 10);
    const hashedPassword4 = await bcrypt.hash('inactiveUser123', 10);

    await queryInterface.bulkInsert('users', [
      {
        email: 'mariaperez@example.com',
        password: hashedPassword1,
        type: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'ikermarco@example.com',
        password: hashedPassword2,
        type: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'admin@example.com',
        password: hashedPassword3,
        type: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'inactiveUser@example.com',
        password: hashedPassword4,
        type: 'user',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Deletes the inserted records from the users table
    await queryInterface.bulkDelete('users', null, {});
  },
};
