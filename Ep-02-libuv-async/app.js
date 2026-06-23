// Synchronous (vey fast)

const https = require("https");

var a = 10789865;
var b = 2089987765;

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);
console.log(c);


// Asynchronous (These tasks take time to execute)
https.get("https://api.github.com/users/jubilee5", (res) => {
    console.log(res);
})

setTimeout(() => {
    console.log("Hello Jubilee after 2 seconds");
}, 2000);

//libuv is used to handle multiple tasks at the same time. it is used to make async IO simpler