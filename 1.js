// Displaying a message to indicate that the JS script is executed
console.log("Namaste, JS executed");

// Variable and Function Declarations
console.log("a =", a); // Undefined
console.log("x = square(a)", x); // Undefined
console.log("y = square(4)", y); // Undefined
console.log(square); // Returns the function definition: function square(num) { .... }
console.log(square(3)); // Returns 9
console.log("p = squareWithFatArrow(a)", p); // Undefined
console.log("q = squareWithFatArrow(4)", q); // Undefined
console.log("squareWithFatArrow", squareWithFatArrow); // Returns undefined
// console.log(squareWithFatArrow(3));  TypeError: squareWithFatArrow is not a function

// Variable and Function Definitions
var a = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var squareWithFatArrow = (num) => {
  var ans = num * num;
  return ans;
};

// Calculate Values
var x = square(a);
var y = square(4);
var p = squareWithFatArrow(a);
var q = squareWithFatArrow(4);

// Display Results
console.log("a =", a); // Returns 2
console.log("x = square(a)", x); // Returns 4
console.log("y = square(4)", y); // Returns 16
console.log("squareWithFatArrow", squareWithFatArrow); // Returns the function definition
console.log("p = squareWithFatArrow(a)", p); // Returns 4
console.log("q = squareWithFatArrow(4)", q); // Returns 16

// Notes:
// 1. JavaScript operates within an execution context.
// 2. An execution context consists of variable environment (memory) and code execution (thread of execution).
// 3. During memory allocation, variables declared with "var" are assigned "undefined".
//    Functions defined using the "function" keyword (line 17) are assigned their complete definition,
//    while fat arrow functions (line 22) are assigned "undefined".
// 4. Variables x, y, p, q are initially "undefined" (lines 5, 6, 9, 10).
// 5. The function "square" has its own defined value, while "squareWithFatArrow" is undefined.
// 6. Calling the function "square" works, but attempting to call "squareWithFatArrow" before declaration throws an error.
// 7. Hoisting in JavaScript refers to variable assignments before declaration.
// 8. JavaScript is single-threaded and synchronous in nature.
