const fs = require('fs');
const path = require('path');
const {stdin, stdout } = process;
const fromStylesPath = path.join(__dirname, 'styles')
const projectDistPath = path.join(__dirname, 'project-dist')
const bundle = fs.createWriteStream(projectDistPath + '/' + 'bundle.css');

fs.readdir(fromStylesPath, (err,files) => {
  files.forEach(file => {
    fs.stat(fromStylesPath + '/'+ file, (err, status) => {
      if(isCssFiles(status,file)) {
        const stream = fs.createReadStream(fromStylesPath + '/' + file, 'utf-8')
        let data = '';
        // read
        stream.on('data', chunk => data += chunk)
        stream.on('end', () => console.log(file, '\n', data.length))
        // write
        stream.on('data', chunk => bundle.write(chunk));
        stream.on('error', error => console.log('Error', error.message));
      }
    })
  })
})







// Helpers
function isCssFiles(status,file) {
  return !status.isDirectory() && path.extname(fromStylesPath + '/'+ file) === '.css'
}
