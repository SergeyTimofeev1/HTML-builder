const fs = require('fs');
const path = require('path');
const {stdin, stdout } = process;
const filePath = path.join(__dirname, 'secret-folder')

fs.readdir(filePath, { withFileTypes: true} ,(err,data) => {
  data.forEach(file => {
    if(!file.isDirectory()) {
      let pathToFile = filePath+'/' + file.name
      fs.stat(pathToFile, (err,stats) => {
        console.log(file.name,'--', path.extname(file.name).slice(1),'--',stats.size + 'B');
      })
    }
  })
})