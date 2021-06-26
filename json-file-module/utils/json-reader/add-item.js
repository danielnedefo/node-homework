const fs = require('fs').promises
const { v4 } = require('uuid')
const jsonRead = require('./read-file') 
const addItem = async (filePath, item) => {
  try {
    const data = await jsonRead(filePath)
    const newItem = { ...item, _id: v4() }
    data.push(newItem)
    const dataString = JSON.stringify(data)
    fs.writeFile(filePath,dataString)
  } catch (error) {
    throw error
  }

}
module.exports = addItem