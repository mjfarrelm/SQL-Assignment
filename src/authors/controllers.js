//import model file to be able to access author structure
const Author = require("./model")



//adds a new author to the file

const addAuthor = async (req, res) => {
    try {
        const addAuthor = await Author.create({
            firstName: req.body.firstName,
            initial: req.body.initial,
            surname: req.body.surname
        })
        res.status(201).json({message: "Success", author: addAuthor})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error}); 
    }
}

//get the total list of authors that have been addded

const getAuthors = async (req, res) => {
    try {
        const getAuthors = await Author.findAll()
        res.status(200).json({message: "Success", authors: getAuthors})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error}); 
    }
}

//update the information in an existing authors entry

const updateAuthor = async (req, res) => {
    try {
        const updateAuthor = await Author.update(
            {
                firstName: req.body.newfirstName
            },
            {
                where: {
                    surname: req.body.surname
                }
            }
        )
        res.status(200).json({message: "Success", authors: updateAuthor})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error}); 
    }
}


//deletes an entry from the author list

const deleteAuthor = async (req, res) => {
    try {
        const deleteAuthor = await Author.destroy({
            where:{
            firstName: req.body.firstName
            }
            })
            res.status(201).json({message: "Success", author: deleteAuthor})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
}


//deletes all entries from the author list

const deleteAllAuthors = async (req, res) => {
    try {
        const deleteAllBooks = await Author.destroy({
            where: {},
            default: true
        })
        res.status(201).json({message: "Success", books: deleteAllAuthors})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
}


//exports the above functions so they can be accessed.
module.exports = {
    addAuthor,
    getAuthors,
    updateAuthor,
    deleteAuthor,
    deleteAllAuthors
}