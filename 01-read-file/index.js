// Modules
const path = require('path');
const fs = require('fs')
// Var
const textPath = path.join(__dirname, 'text.txt')
// streams
const readableStream = fs.createReadStream(textPath,'utf-8');
readableStream.on('data', chunk => console.log(chunk));

// console.log(textPath);
