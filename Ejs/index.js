const express = require('express'),
      app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index',{name: "Adamatti"})
});

app.listen(8080)
console.log('Started - 8080')