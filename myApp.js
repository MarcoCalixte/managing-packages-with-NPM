//Meet the node console
let express = require('express');
let app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config()

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