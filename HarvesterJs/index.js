'use strict';
const Types = require('joi'),
      harvesterjs = require('harvesterjs'),
      options = {
          adapter: 'mongodb',
          connectionString: 'mongodb://localhost:27017/agco',
          oplogConnectionString: 'mongodb://localhost:27017/local',
          inflect: true
      },
      app = harvesterjs(options) 

app.resource('order',{
    description: Types.required().description('Sample'),
    links: {
        customer: 'customer'
    }
})

app.resource('customer',{
    name: Types.required().description('Sample'),
    links: {
        country: 'country'
    }
}).before('customer', function(req) {
    return this
}).after('customer',function (req,res) {
    return this
})

app.resource('country',{
    name: Types.required().description('Sample')
})

app.listen(3000,function(){
    console.log("App started on 3000")
})