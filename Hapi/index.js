'use strict';

const Hapi = require('hapi'),
      server = new Hapi.Server()

server.connection({ port: 3002, host: 'localhost' })

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello!')
    }
})

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, reply) => {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!')
    }
})

server.start(err => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`)
})