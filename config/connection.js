// Sequelize constructor from the librery
const Sequelize = require("sequelize");

require("dotenv").config()

// create connection to the database, psaa in the info for MySQL info
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

module.exports = sequelize