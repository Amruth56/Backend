const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

// app.get("/", (req, res) => {
//   bcrypt.genSalt(2, (err, salt) => {
//     bcrypt.hash("yourPassword ", salt, (err, hash) => {
//       console.log(hash);
//     });
//   });
// });

// app.get('/', (req, res)=> {
//     bcrypt.compare('yourPassword', "$2b$04$3Fmr0ylRJWmHErgc5axLaeEmXBB/XGks5FZOoZ0NIFBIGzO5LN8/W", (err, result)=>{
//         console.log(result)
//     })
// })

app.get("/", (req, res) => {
  const token = jwt.sign({ email: "qwerty@gmail.com" }, "secret");
    res.cookie('token', token)
  res.send("token generated")
});

app.get('/read', (req, res)=> {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
})

app.listen(3000);
