const uuid = require('uuid-v4'),
      amqp = require('amqplib')
      mqConn = amqp.connect('amqp://admin:admin@127.0.0.1:5672/admin'),
      mqChannel = mqConn.then(conn => {return conn.createChannel()}),
      callerId = require('caller-id'),
      S = require("string")
;

var queues = {};

function recordCallback(queueName,eventType, cb){
    if (!queues[queueName]){
        queues[queueName] = {};
    }
    queues[queueName][eventType] = cb;
}

module.exports = {
    emit : function(eventType, body) {
        var event = {
            id: uuid(),
            eventType: eventType,
            eventDate : new Date,
            body : body
        };
        const json = JSON.stringify(event);
        
        return mqChannel.then(channel => {
            return channel.publish('amq.topic', eventType, new Buffer(json));
        }).then ( () => {
            console.log("Event emitted (mq), queue: %s, content: %s ",eventType, json);
        }).catch(error => {
            console.error("Error on emitToRabbitExchange: ", error);
        });
    },
    
    on : function(eventType, cb) {
        const queueName = "node." + 
            S(
                S(
                    callerId.getData().filePath
                ).splitRight('/', 1)[1]
            ).strip(".js")
        ;

        var channel;
        return mqChannel.then(_channel => {
            channel = _channel;
            return channel.assertQueue(queueName, {
                durable: true,
                exclusive: false
            });
        }).then( () => {
            console.log("assertQueue[q: %s]", queueName);
            return channel.bindQueue(queueName,'amq.topic',eventType);
        }).then ( () => {
            return recordCallback(queueName,eventType, cb);
        }).then( () => {
            console.log("bindQueue[q: %s, eventType: %s]", queueName, eventType);
            channel.consume(queueName, msg => {
                try {
                    const obj = JSON.parse(msg.content);                    
                    console.log("dequeue[queue: %s, content: %s]",queueName, JSON.stringify(obj));                
                    const functionToCall = queues[queueName][obj.eventType];
                    if (functionToCall){
                        functionToCall(obj);
                    } else {
                        console.error("No listeners [event %s, queue: %s]",obj.eventType,queueName);
                    }                    
                    channel.ack(msg);
                } catch (error){
                    console.error("Error: ", error);
                }
            });
        }).catch(error => {
            console.error("Error: ", error);
        });
    }
}