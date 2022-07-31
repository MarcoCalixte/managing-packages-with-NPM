//calling the common.js module
let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');
require('dotenv').config()


//middleware function at root level
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
})

//Meet the node console
bGround.log('Hello World')
console.log('Hello World')

//serve an HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//serve static assets
app.use(express.static(__dirname + "/public"))
app.use('/public', express.static(__dirname + "/public")) // add static for assets

// serve json on a specific route
// app.get("/json", (req, res) => {
//     res.json({
//         "message": "Hello json"
//     })
// })

//Use the .env file to configure the app
app.get("/json", (req, res) => {
    let jsonResponse = {
        "message": "Hello json"
    };

    if (process.env.MESSAGE_STYLE === "uppercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }

    res.json(jsonResponse);
})






























module.exports = app;