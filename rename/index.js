const path = require('path')
const fs = require('fs').promises

console.log(__filename)
console.log(__dirname)

const readFile = fs.readFile('../my/read.txt', 'utf8')
const filePath = path.join(__dirname, 'files', 'read.txt')
console.log(filePath)
// readFile
//   .then(data => console.log(data))
//  .catch(error => console.log(error))
// fs.appendFile(filePath, "\n I like it")
// fs.writeFile(filePath, "Goodbay mothefucker")
fs.unlink(filePath)