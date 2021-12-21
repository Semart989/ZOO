'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', [
      {
        email: 'yana@mail.ru',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'artem@mail.ru',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'bagrat@mail.ru',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'sergey@mail.ru',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('Admins', null, { restartIdentity: true, truncate: true });

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
