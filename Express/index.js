//REFERENCE 
//  http://expressjs.com/pt-br/starter/hello-world.html
//  https://www.npmjs.com/package/log4js
const express = require('express'),
      app = express(),
      logger = require('log4js').getLogger()

logger.level = 'trace'

app.get('/',  (req, res) => {
    logger.trace('Home called')
    res.send('Hello World!')
})

app.listen(3001,  () => {
  logger.info('Example app listening on port 3001!')
})