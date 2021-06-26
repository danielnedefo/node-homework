const fs = require('fs').promises

const jsonRead = async (filePath) => {
  try {
    const file = await fs.readFile(filePath)
    const data = JSON.parse(file)
    return data
  } catch (error) {
    console.log(error)
  }
}
module.exports = jsonRead