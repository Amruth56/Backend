//  to read and write files using fs

var fs = require("fs");

var readMe = fs.readFileSync("readme.txt", "utf8");


// to write file 
// (where to write, what to write)
fs.writeFileSync("writeMe.txt", readMe);

console.log(readMe);
