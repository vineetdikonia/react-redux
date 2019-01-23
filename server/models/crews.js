'use strict';
module.exports = function (sequelize, DataTypes) {
    var crews = sequelize.define('crews', {
        uuid: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING,
        week_start: DataTypes.STRING,
        work_hours: DataTypes.INTEGER,
        hourly_rate: DataTypes.INTEGER,
        annual_entitlement: DataTypes.INTEGER,
        address_one: DataTypes.STRING,
        address_two: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        telephone: DataTypes.STRING,
        mobile_number: DataTypes.STRING,
        dob: DataTypes.DATE,
        work_category: DataTypes.INTEGER,
        work_experience: DataTypes.STRING,
        access_privileges: DataTypes.STRING,
    },
        {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });

    return crews;
};