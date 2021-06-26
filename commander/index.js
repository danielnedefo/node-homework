const { program } = require('commander')

program
  .option("-fl, --first-letter <type>")
  .option("-sl, --second-letter <type>")
  .option("-s, --sum")
  .option(  "-m, --minus")

program.parse(process.argv)

const options = program.opts()
console.log(options)
if (options.sum) {
  console.log(options.firstLetter + options.secondLetter)
}