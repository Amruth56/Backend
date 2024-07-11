var fs = require("fs");

//synchronously

//to create directory (makeDirectory - mkdr)
// fs.mkdirSync("stuff");
//to remove directory (removeDirectory - rmdir)
// fs.rmdirSync("stuff");

//Asynchronously

// Create a directory named "stuff"

fs.mkdir("stuff", (mkdirErr) => {
  if (mkdirErr) {
    console.error("Error creating directory:", mkdirErr);
    return;
  }

  // Read the content of "readMe.txt"
  fs.readFile("readMe.txt", "utf8", (readErr, data) => {
    if (readErr) {
      console.error("Error reading file:", readErr);
      return;
    }

    // Write the content to a file inside the "stuff" directory
    fs.writeFile("./stuff/writeMe.txt", data, (writeErr) => {
      if (writeErr) {
        console.error("Error writing file:", writeErr);
        return;
      }
      console.log("File written successfully!");
    });
  });
});

