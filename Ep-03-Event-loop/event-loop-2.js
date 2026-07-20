const fs = require("fs");

const a = 1000;
setImmediate(() => {
    console.log("Hello Jubilee from setImmediate");
})

Promise.resolve().then(() => console.log("Promise Resolved"));

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File Data Fetched : ");
})
    
setTimeout(() => {
    console.log("Hello Jubilee from setTimeout");
}, 0);

process.nextTick(() => {
    console.log("Hello Jubilee from process.nextTick");
})

function printA() {
    console.log("a=  ",a);
}
printA();
console.log("Hello Jubilee from main thread");



//output
// a=   1000
// Hello Jubilee from main thread
// Hello Jubilee from process.nextTick
// Promise Resolved
// Hello Jubilee from setTimeout
// File Data Fetched : 
// Hello Jubilee from setImmediate