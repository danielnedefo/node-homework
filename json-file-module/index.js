const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { argv } = yargs(hideBin(process.argv))

console.log(argv)
const sum = argv.firstNumber + argv.secondNumber
console.log(sum)

const jsonReader = require("./utils")
const { jsonRead,addItem,removeItem } = jsonReader
const path = require('path')

const productsPath = path.join(__dirname, 'files', 'products.json')
// const read = jsonRead(productsPath)
// read
//   .then(file => console.log(file))
//  .catch(error => console.log(error))
// console.log(productsPath)
// const item = {
//   "name":"GeForce42",
//   "price":1323
// }
// addItem(productsPath, item)
// removeItem(productsPath,"1212111")