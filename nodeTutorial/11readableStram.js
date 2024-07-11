const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'asyncWriteMe.txt');

const myReadStream = fs.createReadStream(filePath);

myReadStream.on('data', (chunk) => {
    console.log('New chunk received:');
    console.log(chunk.toString()); // Assuming the file contains text data
});

myReadStream.on('error', (err) => {
    console.error('Error reading file:', err.message);
});
