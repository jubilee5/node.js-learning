

const fs = require("fs");
const a= 100
setImmediate(() => {
    console.log("Hello Jubilee from setImmediate");
})

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File Data Fetched : ");
})

setTimeout(() => {
    console.log("Hello Jubilee from setTimeout");
}, 0);

function printA() {
    console.log("a=  ",a);
}
printA();
console.log("Hello Jubilee from main thread");


//output
//a=   100
// Hello Jubilee from main thread
// Hello Jubilee from setTimeout
// File Data Fetched : 
// Hello Jubilee from setImmediate