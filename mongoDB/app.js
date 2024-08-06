const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey its an index page  ");
});

app.get('/create', (req, res)=> {
    res.send("hey")
})

app.listen(3000);
