function hello(msg){
    console.log("Número de argumentos: ", arguments.length)
    return `Hello ${msg}`
}

module.exports = {
    hello
}