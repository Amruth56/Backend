                    // //  to read and write files using fs synchronous way

// var fs = require("fs");

// var readMe = fs.readFileSync("readme.txt", "utf8");

                    // // to write file
                    // // (where to write, what to write)
// fs.writeFileSync("writeMe.txt", readMe);

// console.log(readMe);

// ------------------------------------------------------------------------------------------

                    //  to read and write files using fs Asynchronous way

const fs = require("fs");

                    // Asynchronous approach
fs.readFile("readme.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  fs.writeFile("asyncWriteMe.txt", data, (writeErr) => {
    if (writeErr) {
      console.error("Error writing file:", writeErr);
      return;
    }
    console.log("File written successfully!");
  });
});


                // to delete a file from
// fs.unlink('fileName')