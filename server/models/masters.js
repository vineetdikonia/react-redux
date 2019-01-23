'use strict';
module.exports = function (sequelize, DataTypes) {
    var masters = sequelize.define('masters', {
        uuid: DataTypes.STRING,
        title: DataTypes.STRING,
        is_active: { type: DataTypes.BOOLEAN, defaultValue:true,},
        created_by: DataTypes.STRING,
        updated_by: DataTypes.STRING,
        type: DataTypes.STRING,
    }, 
    {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });
        
    return masters;
};