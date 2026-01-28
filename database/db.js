import Sequelize from 'sequelize';

const db = new Sequelize("MINI_MART_DB", "root", "bootcamp", {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bootcamp",
  database: "MINI_MART_DB",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default db;