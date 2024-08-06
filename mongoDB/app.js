const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey its an index page");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "harshitha",
    email: "harsh@gmail.com",
    userName: "Harshitha005",
    roll: 57,
  });
  res.send(createdUser);
});

app.get("/update", async (req, res) => {
  let updateUser = await userModel.findOneAndUpdate(
    { userName: "Harsh005" },
    { name: "Harsh Rawat" },
    { new: true }
  );
  res.send(updateUser);
});
 
app.get('/read', async (req, res)=> {
   let users = await   userModel.find();
   res.send(users);

});

app.get('/delete', async (req, res)=> {
    let delUser = await userModel.findOneAndDelete({userName:"Harshitha005"});
    res.send(delUser);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
