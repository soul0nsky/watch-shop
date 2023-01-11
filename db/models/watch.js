const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: 'UserWatches', foreignKey: 'watch_id' });
    }
  }
  Watch.init({
    watch_name: DataTypes.STRING,
    description: DataTypes.STRING,
    link_1: DataTypes.STRING,
    link_2: DataTypes.STRING,
    link_3: DataTypes.STRING,
    link_4: DataTypes.STRING,
    link_5: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Watch',
  });
  return Watch;
};
