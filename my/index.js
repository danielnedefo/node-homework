
const fs = require('fs').promises
const getFile = async (pathFile) => {
  try {
    const file = await fs.readFile(pathFile, "utf8")
    console.log(file)
    return file
  } catch (error) {
    throw error
  }
}
// fs.readFile("read.txt","utf8", (error, data) => {
//   console.log(error)
//   console.log(data)
// })
getFile("read.txt")