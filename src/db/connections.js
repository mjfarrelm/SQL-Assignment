//---------This file runs the code to make connection to the database.-----------------


//Import and create class for Sequelize and then call a new instance.
const { Sequelize } = require ("sequelize")

//establish new instance of Sequelize class calling the connection source from the env file in the brackets.
const connection = new Sequelize(process.env.MYSQL_URI)


//checks connection URI to ensure we can access an existing database.
connection.authenticate()

console.log("DB connection is working")


//allows us to access the connection to the database outside this file- will be imported elsewhere!
module.exports = connection