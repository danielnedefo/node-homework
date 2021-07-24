const express = require("express")

const app = express()

app.use((req,res,next) => {
  console.log("Firt Middleware")
  next()
})

app.get("/", (req,res) => {
  res.send("<h2>Home page</h2>")
})
app.get("/contacts", (req,res) => {
  res.send("<h3>Fuck off beach</h3>")
})
app.listen(3000, () =>  console.log("server running")
)