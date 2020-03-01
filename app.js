const express = require('express')
const app = express()
const port = 4000
// SERVER 
var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', function (req, res) {
    let textOut = "Witaj szanowny Panie w mojej aplikacji..."
    res.send(textOut);
})