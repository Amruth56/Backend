const express = require('express' )
const app = express();

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/chicken', (req, res)=> {
    res.send('1 plate chicken')
})

app.listen(3000)