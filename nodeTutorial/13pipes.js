var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/13writeMe')

myReadStream.pipe(myWriteStream)