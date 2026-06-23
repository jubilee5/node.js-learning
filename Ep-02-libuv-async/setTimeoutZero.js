console.log("Hello Jubilee");
var a = 10789865;
var b = 2089987765;


// this will not be called immediately and only be called after the main thread is free and this callback will be pushed to callstack in v8 once the cakk stack is empty.
setTimeout(() => {
    console.log("Call Hello Jubilee ASAP");
}, 0);

setTimeout(() => {
    console.log("Hello Jubilee after 2 seconds");
}, 2000);

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ",c);