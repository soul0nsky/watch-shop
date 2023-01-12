/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admins', [
      // {
      //   login: 'Sonia',
      //   password: '$2b$10$iT0UlzLKRvSqSrCKyO0uBet6ds/tSv/RzezX/YZXUe2SM6ulHocRm',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }, {
      //   login: 'Filat',
      //   password: '$2b$10$3HOFOU4GdTmONQc1hyvvdeqKcmn8HO0bhn4VwX..4LVuuiIVlqece',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }, {
      //   login: 'Ricardo',
      //   password: '$2b$10$i8yz8wpBatuADYwmjetlnelKaKm2c9AgdwCcdWX.mr63LIKElsVtO',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
