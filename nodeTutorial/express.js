const express = require('express' )
const app = express();

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/chicken', (req, res)=> {
    res.send('1 plate chicken')
})

app.get('/idli', (req, res)=> {
    var customized_idli = {
        name: 'rava idli',
        size: "10 cm in diameter",
        is_sambar: true,
        quantity: 2,
    }
    res.send( customized_idli)
})

app.listen(3000, ()=> {
    console.log("listening to port 3000")
}) 