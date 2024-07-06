var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user.username);
console.log(user.name);

fs.appendFile("greeting.txt", "hi" + user.username + "!\n", () => {
  console.log("File is created");
});

// fs.appendFile(file Path, data, callback function)
fs.appendFile("newFile.txt", "hi " + user.username + "\n", () => {
  console.log("new file created");
});

console.log(os)
console.log("\n")
console.log(fs)
 