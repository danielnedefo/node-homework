const express = require("express")
const cors = require("cors")
const fs = require("fs").promises
const path = require("path")
const multer = require("multer")

const app = express()

const tempDir = path.join(process.cwd(),"temp")

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,tempDir)
  },
  filename: (req,file,cb) => {
    cb(null, file.originalname
    )
  },
  limits:{
    fileSize:100000
  }
})
const upload = multer({
  storage
})

app.use(cors())

app.post("/", upload.single("image"),(req, res) => {
  console.log(req.file)
})

const {PORT = 3000} = process.env