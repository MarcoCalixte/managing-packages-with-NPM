//calling the common.js module//
let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');
require('dotenv').config()


//middleware function at root level//
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
})

//Meet the node console//
bGround.log('Hello World')
console.log('Hello World')

//serve an HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//serve static assets//
app.use(express.static(__dirname + "/public"))
app.use('/public', express.static(__dirname + "/public")) // add static for assets

// serve json on a specific route
// app.get("/json", (req, res) => {
//     res.json({
//         "message": "Hello json"
//     })
// })

//Use the .env file to configure the app//
app.get("/json", (req, res) => {
    let jsonResponse = {
        "message": "Hello json"
    };

    if (process.env.MESSAGE_STYLE === "uppercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }

    res.json(jsonResponse);
})

//Chaining Middleware. A time server//
function getTheCurrentTimeString() {
    return new Date().toString();
}
app.get("/now", (req, res, next) => {
    req.time = getTheCurrentTimeString();
    next();
}, (req, res) => {
    res.json({
        time: req.time
    })
})

//Get Route Parameter Input from the Client//
app.get("/:word/echo", (req, res) => {
    res.json({
        echo: req.params.word
    })
})

//Get Query Parameter Input from the Client//
//first=firstname&last=lastname//
app.get("/name", (req, res) => {
    res.json({
        name: req.query.first + " " + req.query.last
    })
    // JSON response to get the first name and last name from the API server
})

































module.exports = app;