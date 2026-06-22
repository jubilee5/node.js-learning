console.log("hello world");


//require("./path");
// All the code of the module is wrapped inside a function. this function is knowm as IIFE (Immediately Invoked Function Expression)

//IIFE
// (function (module, require) {

//     function calculateMultiply(a, b) {
//     const result = a * b
//     console.log(result);       
// }

// module.exports = { calculateMultiply } 
    
// })();

//Before let and const existed, developers used IIFEs to create a private scope so variables wouldn't leak into the global scope.


// A Module Wrapper Function is not exactly an IIFE, but it follows the same concept. Node.js wraps every module inside a function to provide module-level scope and inject useful variables like require, module, exports, __filename, and __dirname. An IIFE is a function written by the developer that executes immediately, whereas the Module Wrapper Function is created and executed by Node.js automatically.