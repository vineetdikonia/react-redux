'use strict';
module.exports = function (sequelize, DataTypes) {
    var buildings = sequelize.define('buildings', {
        uuid: DataTypes.STRING,
        building_name: DataTypes.STRING,
        building_type: DataTypes.STRING,
        building_description: DataTypes.STRING,
        address_one: DataTypes.STRING,
        address_two: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        owner_name: DataTypes.STRING,
        owner_email: DataTypes.STRING,
        owner_mobile: DataTypes.STRING,
        owner_phone: DataTypes.STRING,
        owner_extension: DataTypes.STRING,
        building_manager: DataTypes.STRING,
        manager_email: DataTypes.STRING,
        manager_mobile: DataTypes.STRING,
        manager_phone: DataTypes.STRING,
        manager_extension: DataTypes.STRING,
        building_super: DataTypes.STRING,
        super_email: DataTypes.STRING,
        super_mobile: DataTypes.STRING,
        super_phone: DataTypes.STRING,
        super_extension: DataTypes.STRING,
        location_info: DataTypes.STRING,
    },
        {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });

    return buildings;
};