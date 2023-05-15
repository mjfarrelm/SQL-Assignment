//import router library from express & define router 
const { Router } = require("express")
const authorRouter = Router()

//import Get/Put/Post/Delete functions from Controllers.JS, then call fuction in the bookRouter.post so it is fully linked

const { addAuthor, getAuthors, updateAuthor, deleteAuthor, deleteAllAuthors } = require("./controllers") //remember to add the function into the brackets on this line to call them!
authorRouter.post("/authors/addAuthor", addAuthor)
authorRouter.get("/authors/getAuthors", getAuthors)
authorRouter.put("/authors/updateAuthors", updateAuthor)
authorRouter.delete("/authors/deleteAuthor", deleteAuthor)
authorRouter.delete("/authors/deleteAllAuthors", deleteAllAuthors)

//exports Router to link files together.
module.exports = authorRouter