var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/14index.html')
})

app.get('/contact', (req, res)=> {
    res.sendFile(__dirname + '/16contact.html')
})

app.get('/profile/:name',  (req, res)=> {
    res.render('profile', {person: req.params.name })
})

app.listen(3000)