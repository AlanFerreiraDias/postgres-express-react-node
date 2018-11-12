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
    freezeTableName: true,
    tableName: 'company'
  });
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};