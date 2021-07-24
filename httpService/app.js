const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader("Content-type","text/html","charset=utf-8")
  // console.log(req.headers["user-agent"])
  // res.setHeader("Content-type", "text/html", "charset=utf-8")
  // res.write("<h2>Hello bitches</h2>")
  // res.end()
  if (req.url === "/") {
    res.write("<h2>Hello bitches</h2>")
  } else if (req.url === "/contacts")
    res.write('<h2>Response page</h2>')
})

server.listen(3000)