//REFERENCES: https://github.com/mjackson/then-redis

const createClient = require('then-redis').createClient,
      db = createClient('tcp://localhost:6379')

db.get("count").then( value => {
    console.log ("Current count is ",value)

    value = value || 0;
    db.set("count",parseInt(value) + 1)
})