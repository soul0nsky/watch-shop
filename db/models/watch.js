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
  }, {
    sequelize,
    modelName: 'Watch',
  });
  return Watch;
};
