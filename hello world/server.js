const express = require('express')
const app = express()
const db = require('./db')

app.get('/', (req, res)=> {
    res.send('welcome to my host..')
})

app.listen(3000, ()=> {
    console.log('listening on port')
})