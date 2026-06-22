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