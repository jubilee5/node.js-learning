// Modules protects their variables and functions from leaking
console.log("Sum Module Executed");

var x = "Hello Jubilee";
const calculateSum = (a, b) => {
    const sum = a + b
    console.log(sum);       
}
//module.exports =  calculateSum;         //exporting calculateSum function

module.exports = {
   calculateSum: calculateSum,
    x: x
}