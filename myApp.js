//Meet the node console
let express = require('express');
let app = express();
var bGround = require('fcc-express-bground');

bGround.log('Hello World')
console.log('Hello World')

//serve an HTML file
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

//serve static assets
app.use(express.static(__dirname + "/public"))
app.use('/public', express.static(__dirname + "/public")) // add static for assets

// serve json on a specific route
app.get("/json", function (req, res) {
    res.json({
        "message": "Hello json"
    })
})































module.exports = app;