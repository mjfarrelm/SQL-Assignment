//import model file to be able to access book structure
const Book = require("./model")



//adds a new book to the file
const addBook = async (req, res) =>{
    try {
            const newBook = await Book.create({
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre
            })
            res.status(201).json({message: "Book added", book: newBook})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
}


//get the total list of books that have been addded
const getAllBooks = async (req, res) => {
    try { 
        const books = await Book.findAll()
        res.status(200).json({message: "Success", books: books})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
}


//update the information in an existing book entry
const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update(
            {
        
                author: req.body.newAuthor
            },
            {
                where: {
                    title: req.body.title
                }
            }
            )
            res.status(200).json({message: "Success", updateResult: updateBook})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
}

//deletes an entry from the book list
const deleteBook = async (req, res) => {
    try {
        const deleteBook = await Book.destroy({
            where:{
                title: req.body.title
            }
        })
        res.status(201).json({message: "Success", book: deleteBook})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
}

//deletes all entries from the book list
const deleteAllBooks = async (req, res) => {
    try {
        const deleteAllBooks = await Book.destroy({
            where: {},
            default: true
        })
        res.status(201).json({message: "Success", books: deleteAllBooks})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
}


//exports the above functions so they can be accessed.
module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook,
    deleteAllBooks
}