const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const watches = Array.from({ length: 15 }, () => ({
      watch_name: faker.company.companyName(),
      description: faker.commerce.productDescription(),
      link_1: faker.image.imageUrl(),
      link_2: faker.image.imageUrl(),
      link_3: faker.image.imageUrl(),
      link_4: faker.image.imageUrl(),
      link_5: faker.image.imageUrl(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Watches', watches);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Watches', null, {});
  },
};
