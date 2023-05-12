
//import router library from express & define router 
const { Router } = require("express")
const bookRouter = Router()

//import Get/Put/Post/Delete functions from Controllers.JS, then call fuction in the bookRouter.post so it is fully linked

const { addBook, getAllBooks, updateBook, deleteBook, deleteAllBooks, } = require("./controllers")
bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getAllBooks", getAllBooks)
bookRouter.put("/books/updateBook", updateBook)
bookRouter.delete("/books/deleteBook", deleteBook)
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks)

//exports Router to link files together.
module.exports = bookRouter