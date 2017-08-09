const app = require("../index"), 
      frisby = require('frisby')

frisby.create('List orders')
    .get('http://localhost:3000/orders')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes(0,{
        "id": String
    })
.toss()
