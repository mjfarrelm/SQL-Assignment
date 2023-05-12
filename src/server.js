// Accessing data from other files as well as packages installed onto Package.JSON file & setting up Port database will run from

require("dotenv").config()
const express = require("express")
const Book = require("./books/model")
const bookRouter = require("./books/routes")
const port = 5001
const app = express()

//telling server that requests and responses that will be processed through the app.express (above) will be in JSON format
app.use(express.json())


//sync tables on the database &/ or create new one if one doesn't already exist.
const syncTables = () =>{
    Book.sync()
}

//route to check whether the API is functioining correctly. Response sent in JSON via ThunderClient.
app.get("/health", (req, res) =>{
    res.status(200).json({message: "Server is running"})
})

//route to...1: check port is listening for updates made in the app. 2: execute SyncTables function from lines 14-16.
app.listen(port, ()=>{
    syncTables()
    console.log("Server is listening")
})


//takes the bookRouter imported above (line 6) and links it to the routes file so the request can be succesfully handled 
app.use(bookRouter)