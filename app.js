const express = require("express")
const server = express()
server.use(require("body-parser").urlencoded({ extended: false }))
const http = require("http").Server(server)
const port = process.env.PORT || 80

server.get("/upload", (req, res) => {
  console.log("recieved message: " + req.query.message)
  res.send(req.query.message)
})

http.listen(port, () => { console.log("listening on port " + port) })
