require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connected to MySQL!');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  module.exports = { sequelize, connectDB };