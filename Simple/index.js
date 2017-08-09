// REFERENCE http://www.infoworld.com/article/3210589/node-js/what-is-nodejs-javascript-runtime-explained.html
const http = require('http'),
      hostname = '127.0.0.1',
      port = 3000

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end("Hello world\n")
})
    
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})