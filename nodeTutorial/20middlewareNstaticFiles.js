var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.use("/assets", express.static('assets'));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/profile/:name", (req, res) => {
  var data1 = {
    age: 29,
    job: "Software Developer",
    hobbies: ["eating", "fighting", "fishing"],
  };
  res.render("profile", { person: req.params.name, data: data1 });
});

app.listen(3000);
 