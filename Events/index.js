const EventEmitter = require('events'),
      events = new EventEmitter()

events.on("app.started", () => {
    console.log("App started")
    events.emit("db.load.requested")
})

events.on("db.load.requested", () => {
    console.log("Loading DB")
    events.emit("db.loaded")
})

events.on("db.loaded", () => {
    console.log("DB loaded")
})

events.emit("app.started") 