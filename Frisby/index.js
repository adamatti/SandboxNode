//REFERENCES: https://github.com/sideshowcoder/canned
const canned = require('canned'),
      http = require('http'),
      opts = { logger: process.stdout },
      can = canned('www', opts),
      server = http.createServer(can).listen(3000)

module.exports = {
    
}