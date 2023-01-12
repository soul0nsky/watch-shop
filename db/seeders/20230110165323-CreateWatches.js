const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const watches = Array.from({ length: 15 }, () => ({
      watch_name: faker.company.companyName(),
      description: faker.commerce.productDescription(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Watches', watches);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Watches', null, {});
  },
};
