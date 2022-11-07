const fs = require('fs');
const path = require('path');
const {stdin, stdout } = process;
const filePath = path.join(__dirname, 'text.txt')

  // создаем файл
  const output = fs.createWriteStream(filePath);
  stdout.write('Введите текст\n');
  stdin.on('data', data => {
    fs.appendFile(filePath,data.toString(), () => {
      console.log("Текст записан в файл text.txt");
    })
    if(data.toString('utf8').trim()=== 'exit') {
      stdout.write('Удачи с изучением Node.js');
      process.exit()
    }
    process.on('SIGINT', () => {
      stdout.write('Удачи в изучении Node.js!')
      process.exit()
    });
  });










// const { stdin, stdout } = process;

// stdout.write('Как тебя зовут?\n');
// stdin.on('data', data => {
//   stdout.write('Привет, ');
//   stdout.write(data);
//   process.exit();
// });
// process.on('exit', () => stdout.write('Удачи!'));