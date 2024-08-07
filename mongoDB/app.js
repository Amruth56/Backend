// const express = require("express");
// const app = express();

// const userModel = require("./usermodel");

// app.get("/", (req, res) => {
//   res.send("hey its an index page");
// });

// app.get("/create", async (req, res) => {
//   let createdUser = await userModel.create({
//     name: "harshitha",
//     email: "harsh@gmail.com",
//     userName: "Harshitha005",
//     roll: 57,
//   });
//   res.send(createdUser);
// });

// app.get("/update", async (req, res) => {
//   let updateUser = await userModel.findOneAndUpdate(
//     { userName: "Harsh005" },
//     { name: "Harsh Rawat" },
//     { new: true }
//   );
//   res.send(updateUser);
// });

// app.get('/read', async (req, res)=> {
//    let users = await   userModel.find(  );
//    res.send(users);

// });

// app.get('/delete', async (req, res)=> {
//     let delUser = await userModel.findOneAndDelete({userName:"Harshitha005"});
//     res.send(delUser);
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// --------------------------------------------------------------

// crude operation with ejs and server side rendering

const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "pubic")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
 let allUsers = userModel.find();
  res.render("read ", users: allUsers);
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });
  res.send(createdUser);
});

app.listen(3000, () => {
  console.log("server is listening");
});
