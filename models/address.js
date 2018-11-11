'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    street: DataTypes.STRING,
    streetNumber: DataTypes.INTEGER,
    complementary: DataTypes.STRING,
    postalCode: DataTypes.STRING
  }, {
    underscored: true,
  });
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};