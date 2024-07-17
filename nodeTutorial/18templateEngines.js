var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/14index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/16contact.html");
});

app.get("/profile/:name", (req, res) => {
  var data1 = { age: 29, job: "Software Developer", hobbies: ["eating", 'fighting', 'fishing'] };
  res.render("profile", { person: req.params.name, data: data1 });
});

app.listen(3000);
