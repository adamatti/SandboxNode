const logger = require("log4js").getLogger(),
    Promise = require("bluebird")

logger.level = 'debug'

function factorial(n){
	if (n==0 || n==1){
		return Promise.resolve(1);
	} 
	
	return factorial(n-1).then( result => result * n)
}

logger.debug("start")
const range = Array.from({length: 1000}, (_, i) => i)

return Promise.map(range, i => {
	return factorial(i).then( result => {
		logger.trace(i + " => " + result)
	})
}).then( () => {
    logger.debug("all done")
}).catch(err => {
    logger.error("Error: ",err)
})