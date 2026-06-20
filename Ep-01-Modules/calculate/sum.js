// Modules protects their variables and functions from leaking
console.log("Sum Module Executed");

 var x = "Hello Jubilee";
const calculateSum = (a, b) => {
    const sum = a + b
    console.log(sum);       
}

// export using commonjs
 //module.exports =  calculateSum;         //exporting calculateSum function

 module.exports = { calculateSum, x };

 // another way of exporting
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;



// export using es6
// export const calculateSum = (a, b) => {
//     const sum = a + b
//     console.log(sum);       
// }

// add this in package.json while using es6 export
// {
//     "type" : "module"
// }