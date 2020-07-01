'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    old: DataTypes.INTEGER,
    type: DataTypes.STRING,
    startCareer: DataTypes.INTEGER,
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
    // Artist.hasMany(models.Music);
  };
  return Artist
};
