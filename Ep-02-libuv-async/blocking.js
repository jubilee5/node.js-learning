const crypto = require("crypto");

console.log("Hello Jubilee");

var a = 10789865;
var b = 2089987765;

//pbkdf2 - password based key derivation function

// Synchronous (blocking the main thread) dont use these
crypto.pbkdf2Sync('password', 'salt', 5000000, 50, 'sha512');
console.log("First Password Encrypted");

// Asynchronous (non-blocking)
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err,key) => {
    console.log("SecondPassword Encrypted");
})

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ",c);