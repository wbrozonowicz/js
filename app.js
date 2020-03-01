const express = require('express')
const app = express()
const port = 4000
// SERVER 
var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function printMe(){
    let outText  = "This is text to print on the start";
    return outText;
}


app.get('/', function (req, res) {
    let textOut = printMe();
    res.send(textOut);
})
