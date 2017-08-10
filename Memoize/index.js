const memoize = require("memoize")

function factorial(n,cb){
    console.log("chamou a função real: ",n)
	if (n==0 || n==1){
		return cb(null,1)
	} 

	factorial(n-1,(err,result) => { 
        cb(null, result * n ) 
    })
}

const arr = [1,2,1,2,1,2,1,2]
const f = memoize(factorial)

for (var i=0; i<arr.length ; i++){
    f(arr[i], (err,result) => {
        console.log("fatorial - ",arr[i],": ",result)
    })
}