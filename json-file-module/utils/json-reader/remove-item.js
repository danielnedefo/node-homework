const fs = require('fs').promises
const jsonRead = require('./read-file') 

const removeItem = async (pathname,id) => {
  const data = await jsonRead(pathname)
  const removed = data.filter(elem => elem._id !== id)
  const dataString = JSON.stringify(removed)
  fs.writeFile(pathname,dataString)
}
module.exports = removeItem