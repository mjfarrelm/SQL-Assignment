//-----------------File to set up the structure of the tables in the database-----------

//accesses the sequelise class established in connections file and store in the packageJSON.

const { DataTypes } = require("sequelize")

//accesses the connection to the database established in connections file. File path must be specified.

const connection = require("../db/connections")


//access connection to create a book model using sequelise syntax ('define')

//NOTE: Sequelize automatically pluralises, so always use "Book" rather than "Books"

const Author = connection.define("Author", {
    firstName: {
        type:DataTypes.STRING,
        allowNull: false,
        },
        initial: {
        type:DataTypes.STRING,
        allowNull: true,
        },
    surname: {
        type:DataTypes.STRING,
        allowNull: false,
        }
})


//Exports the above code so it can process the layout of the Book table as defined above (Lines 15-27).
module.exports = Author;