'use strict';
module.exports = function (sequelize, DataTypes) {
    var tenant_infos = sequelize.define('tenant_infos', {
        uuid: DataTypes.STRING,
        building_id: DataTypes.INTEGER,
        location_type: DataTypes.STRING,
        code: DataTypes.STRING,
        tenant_name: DataTypes.STRING,
        contact_person: DataTypes.STRING,
        email: DataTypes.STRING,
        mobile: DataTypes.STRING,
        phone: DataTypes.STRING,
        extension: DataTypes.STRING,
    },
    {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    return tenant_infos;
};