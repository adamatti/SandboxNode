const logger = require("log4js").getLogger()
logger.level = 'debug'

function factorial(n){
	if (n==0 || n==1){
		return 1
	} 

	return n * factorial(n-1)
}

logger.debug("start")
for(var i=0;i<10000;i++){
	logger.trace(i + " => " + factorial(i))
}
logger.debug("all done")