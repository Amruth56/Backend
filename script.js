const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/profile", (req, res, next) => {
  return next(new Error("Something went wrong"));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("this goes in to the frontend");
});
app.listen(8080);
