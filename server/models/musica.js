'use strict';
module.exports = (sequelize, DataTypes) => {
  const Musica = sequelize.define('Musica', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    attach: DataTypes.STRING,
    artistId: DataTypes.INTEGER
  }, {});
  Musica.associate = function(models) {
    // associations can be defined here
    Musica.belongsTo(models.Artist,{
      as: "artist",
      foreignKey: {
        name: "artistId",
      },
    });

  };
  return Musica;
};
