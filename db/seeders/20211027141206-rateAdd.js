module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rates', [
      {
        nameRate: 'Взрослый',
        priceRate: '400',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameRate: 'Детский',
        priceRate: '100',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameRate: 'Льготный',
        priceRate: '100',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameRate: 'Студенческий',
        priceRate: '200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
