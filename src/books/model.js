//-----------------File to set up the structure of the tables in the database-----------

//accesses the sequelise class established in connections file and store in the packageJSON.

const { DataTypes } = require("sequelize")

//accesses the connection to the database established in connections file. File path must be specified.

const connection = require("../db/connections")


//access connection to create a book model using sequelise syntax ('define')

//NOTE: Sequelize automatically pluralises, so always use "Book" rather than "Books"
const Book = connection.define("Book", {
    title: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    author: {
        type:DataTypes.STRING
    },
    genre:{
        type:DataTypes.STRING
    }
})


//Exports the above code so it can process the layout of the Book table as defined above (Lines 15-27).
module.exports = Book;