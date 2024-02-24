// Global Context and the Window Object

// In a JavaScript file, there is a default global variable called "window,"
// which represents the global context and contains all variables declared at the global level.
console.log(window); // Prints the "window" object, which is the global context.

// The "this" keyword in the global context is equivalent to the "window" object.
console.log(this === window); // Prints "true" since "this" refers to the global context (window).
console.log(this); // Prints the "window" object itself.

// Declare a global variable "x" with a value of 10.
var x = 10;

// Define a function named "demo."
function demo() {
    var y = 6; // Declare a local variable "y" within the function.
}

// Attempting to access "y" here would result in a "not defined" error
// since "y" is only defined within the scope of the function.

// All of the following lines will print the same value (10):
// 1. Accessing "x" using "this.x" within the global context.
console.log(this.x);
// 2. Accessing "x" using the "window" object within the global context.
console.log(window.x);
// 3. Directly accessing the global variable "x."
console.log(x);

// In summary, the global context in JavaScript is represented by the "window" object,
// and variables declared at the global level become properties of the "window" object.
