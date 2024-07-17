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
app.get('/profile/:id', (req, res)=> {
    res.send('this is the profile page ' + req.params.id)
})
app.get('/character/:name', (req, res)=> {
    res.send('the name of the person is :' + req.params.name)
})
app.listen(3000)