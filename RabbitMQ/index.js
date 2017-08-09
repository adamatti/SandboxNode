const mq = require("./mq")

mq.on("app.started", msg =>{
    console.log("app.started")
})

mq.emit("app.started",{})