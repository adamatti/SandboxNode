import * as express from "express";

const app = express();

app.get("/",  (req, res) => {
    res.send('Hello World!');
})

app.listen(3001,  () => {
  console.log('Example app listening on port 3001!')
})



class Person {
    firstName: string;
    lastName: string;

    constructor(public fn:string,public ln:string){
        this.firstName = fn;
        this.lastName = ln;
    }
}
var user = new Person("Marcelo","Adamatti");
