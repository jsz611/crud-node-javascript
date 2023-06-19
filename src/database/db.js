const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/storage/database.sqlite",
});

module.exports = sequelize;
