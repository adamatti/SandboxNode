//REFERENCES https://www.npmjs.com/package/cluster
const cluster = require('cluster/'),
      http    = require('http')

function app(){
    http.createServer(function(req, res){
        console.log('%s %s', req.method, req.url)
        var body = 'Hello World'
        res.writeHead(200, { 'Content-Length': body.length })
        res.end(body)
    })
}

cluster(app)
  .use(cluster.logger('logs'))
  .use(cluster.stats())
  .use(cluster.pidfiles('pids'))
  .use(cluster.cli())
  .use(cluster.repl(8888))
  .listen(3000)