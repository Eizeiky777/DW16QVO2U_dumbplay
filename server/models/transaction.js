'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    startDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    attach: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'cancel', 'approved')

  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      },
    });
  };
  return Transaction;
};
