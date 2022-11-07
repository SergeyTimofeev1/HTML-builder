const fs = require('fs');
const path = require('path');
const {stdin, stdout } = process;
const filePath = path.join(__dirname, 'files')
const filesInDir = path.join(__dirname)
const fileCopy = path.dirname(__filename) + '/' + 'files-copy'

fs.readdir(filesInDir, (err,data) => {
  if(!data.includes('files-copy')) {
    fs.mkdir(fileCopy, err => {
      if(err) throw err; // не удалось создать папку
    });    
  } else {
    fs.readdir(path.dirname(__filename) + '/' + 'files-copy',(err,data) => {
      data.forEach(file => {
        fs.unlink(fileCopy + '/' + file, err => {
          if(err) throw err; // не удалось удалить файл
       });
      })
    })
    copyFiles()
  }
})


function copyFiles() {
  fs.readdir(filePath,(err,data) => {
    data.forEach(file => {
      let fromDir = filePath + '/' + file
      let toDir = path.dirname(__filename) + '/files-copy/' + file
      fs.copyFile(fromDir, toDir, (err) => {
        if(err) throw err; // не удалось переместить - директории не существует 
      })
    })
  })
}

