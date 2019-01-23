const db = require('../models');

module.exports = () => {
  const { sequelize } = db;
  return sequelize.sync({ alter: true, force: false });
};
