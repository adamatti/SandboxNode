//REFERENCES https://github.com/Automattic/monk

const db = require('monk')('localhost/mydb')

const users = db.get('users')

users.find({}).then(data => {
    console.log("List of users: ")

    for(var i = 0; i < data.length; i++){
        console.log("User ",data[i])
    }
})

users.insert({name:"Marcelo"})