var express = require('express')
var app = express()


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/14index.html')
})

app.get('/contact', (req, res)=> {
    res.sendFile(__dirname + '/16contact.html')
})

app.listen(3000)