'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    listAs: DataTypes.ENUM('user','admin'),
    gender: DataTypes.ENUM('male','female'),
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    subscribe: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Transaction);
  };
  return User;
};
