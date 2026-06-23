require("./xyz");           //importing module xyz.js in app.js module
// const obj = require("./sum");      //importing module sum.js in app.js module so to access their functions and variables

// const { x, calculateSum } = require("./calculate/sum");      //destructuring commonjs module on the fly
// const { calculateMultiply } = require("./calculate/multiply");      

const util = require("node:util");
const {calculateMultiply, calculateSum} = require("./calculate");  // importing multiple modules together

const data = require("./data.json");

console.log(data);

//import { x, calculateSum } from "./sum.js";      //es6 module
var name = "Hello Node.js";

var a= 10;
var b = 20;
var x = 100;

//console.log(a+b);

//console.log(name);

//console.log(global);        //global object in node, which is window object in browser

//console.log(this); // this returns empty object

//console.log(globalThis);        // globalThis is same as global. it is used a standard way to access global object

// obj.calculateSum(a,b);          //calling calculateSum function is not possible because by default Modules protects their variables and functions from leaking . so the console.log is printed but sum function is not called

calculateSum(a,b);

calculateMultiply(a,b);

//console.log(obj.x);

console.log(x);