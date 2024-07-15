var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/12writeMe.txt')

myReadStream.on('data', (chunk)=> {
    console.log(`new chunk received`);
    myWriteStream.write(chunk)
})