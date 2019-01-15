'use strict';
module.exports = function (sequelize, DataTypes) {
    var jobs = sequelize.define('jobs', {
        client: DataTypes.STRING,
        request_number: DataTypes.STRING,
        request_type: DataTypes.STRING,
        request_category: DataTypes.STRING,
        location_type: DataTypes.STRING,
        request_by: DataTypes.STRING,
        request_data: DataTypes.STRING,
        brief_description: DataTypes.TEXT,
        full_description: DataTypes.TEXT,
        start_date: DataTypes.STRING,
        priority: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return jobs;
};