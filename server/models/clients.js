'use strict';
module.exports = function (sequelize, DataTypes) {
    var clients = sequelize.define('clients', {
        uuid: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.TEXT,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        country: DataTypes.STRING,
        phone: DataTypes.STRING,
        fax: DataTypes.STRING,
        website: DataTypes.STRING,
    },
    {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    return clients;
};