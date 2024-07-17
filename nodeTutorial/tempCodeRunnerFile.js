var express = require('express')
var app = express()


app.get('/', (req, res)=> {
    res.send('this is the express home page')
})
app.listen(3000)