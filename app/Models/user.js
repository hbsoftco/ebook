'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true,
      },
    }

  }, {
    paranoid: true
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
