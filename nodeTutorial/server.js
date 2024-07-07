// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user.username);
// console.log(user.name);

// fs.appendFile("greeting.txt", "hi" + user.username + "!\n", () => {
//   console.log("File is created");
// });

// // fs.appendFile(file Path, data, callback function)
// fs.appendFile("newFile.txt", "hi " + user.username + "\n", () => {
//   console.log("new file created");
// });

// console.log(os)
// console.log("\n")
// console.log(fs)

const notes = require(`./02notes.js`)
var _ = require('lodash')
console.log("hiii")
const age = notes.age;
console.log(age)

// var data = ['person1', "person1", 'person2', 1, 2, 3, 2, 8,8]
// var filter = _.unique(data)

// console.log(filter)
  
