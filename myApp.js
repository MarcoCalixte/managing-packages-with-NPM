let express = require('express');
let app = express();
var bGround = require('fcc-express-bground');

bGround.log('Hello World')
console.log('Hello World')


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.use(express.static(__dirname + "/public"))
app.use('/public', express.static(__dirname + "/public")) // add static for assets


































module.exports = app;