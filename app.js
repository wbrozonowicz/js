const express = require('express')
const app = express()
const port = 4000
// SERVER 
var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', function (req, res) {
    res.send('hello hi');
})