const https = require("https");
const fs = require("fs");

console.log("Hello Jubilee");

var a = 10789865;
var b = 2089987765;

// Synchronous (this will block the main thread)
fs.readFileSync("./file.txt", "utf-8");
    console.log("This will only run after file data is read");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data successfully");
})

setTimeout(() => {
    console.log("Hello Jubilee after 2 seconds");
}, 2000);

// Asynchronous
fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File Data : ",data);
})

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ",c);