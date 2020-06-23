'use strict';
module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    attach: DataTypes.STRING,
    artistId: DataTypes.INTEGER,

  }, {});
  Music.associate = function(models) {
    Music.belongsTo(models.Artist,{
      foreignKey: {
        name: "artistId",
      },
    });

  };
  return Music;
};
