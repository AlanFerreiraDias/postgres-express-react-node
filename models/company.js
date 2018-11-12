'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    legal_name: DataTypes.STRING,
    trade_name: DataTypes.STRING,
    legal_type: DataTypes.STRING,
    registration_number: DataTypes.STRING,
    address: DataTypes.JSONB,
    phone: DataTypes.JSONB
  }, {
    underscored: true,
  });
  company.associate = function(models) {
    // associations can be defined here
    company.hasMany(models.phone)
  };
  return company;
};