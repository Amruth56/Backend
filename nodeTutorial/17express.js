var express = require('express')
var app = express()


app.get('/', (req, res)=> {
    res.send('this is the express home page')
})

app.get('/contact', (req, res)=> {
    res.send('this is the contact page')
})
app.get('/login', (req, res)=> {
    res.send('this is the login page')
})
app.listen(3000)