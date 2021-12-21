module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Animals', [
      {
        name: 'Кит',
        description: 'Морское чудовище. Морские млекопитающие из инфраотряда китообразных, не относящиеся ни к дельфинам, ни к морским свиньям.',
        pics: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jumping_Humpback_whale.jpg/1280px-Jumping_Humpback_whale.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тигр',
        description: 'Вид хищных млекопитающих семейства кошачьих, один из пяти представителей рода пантера (лат. Panthera), который относится к подсемейству больших кошек.',
        pics: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1280px-P.t.altaica_Tomak_Male.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сойка',
        description: 'Птица рода соек семейства врановых отряда воробьинообразных. Слово сойка — уменьшительная форма от древнерусского названия этой птицы «соя». Предполагается, что название родственно глаголу «сиять» и дано птице за яркое оперение.',
        pics: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Garrulus_glandarius_B_Luc_Viatour.jpg/1280px-Garrulus_glandarius_B_Luc_Viatour.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Слон',
        description: 'Слоны — семейство млекопитающих, самые крупные из современных наземных животных',
        pics: 'https://i-fakt.ru/wp-content/uploads/2011/06/fakty-slony.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Бобёр',
        description: 'Бобры́ (лат. Castor от др.-греч. κάστωρ «бобр» ← κάστον «древесина») — род млекопитающих из отряда грызунов. Единственный современный представитель семейства бобровых (Castoridae Hemprich, 1820).',
        pics: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/%D0%91%D0%BE%D0%B1%D1%80_I.jpg',
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
