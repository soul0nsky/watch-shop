const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = Array.from({ length: 15 }, () => ({
      user_name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
