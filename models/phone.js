'use strict';
module.exports = (sequelize, DataTypes) => {
  const phone = sequelize.define('phone', {
    type: DataTypes.STRING,
    number: DataTypes.STRING
  }, {});
  phone.associate = function(models) {
    // associations can be defined here
  };
  return phone;
};