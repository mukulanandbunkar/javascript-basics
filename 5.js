// Temporal Dead Zone (TDZ)
// The temporal dead zone is a phase in which we can't access variables declared with let or const.
// Variables declared with let or const have a separate memory allocation.
// console.log(a); // Throws a reference error because we can't use "a" before declaration.
let a;

// let a; // Throws a syntax error since "a" is already declared.
// const a; // Throws a syntax error since "a" is already declared.

const b = 1000;
// b = 10; // This will return a type error since we're trying to change a constant value.

console.log(a); // This will return undefined since "a" has been declared but not initialized.
a = 10;
console.log(a); // This will return 10 after assigning a value to "a".

// Both lines below return undefined because there is no global object for "let"; it's stored in a separate memory space.
console.log(this.a);
console.log(window.a);

// let:
// 1. We can't declare the same variable name again (e.g., let a, var a, const a), as it will throw a syntax error.
// 2. Difference between syntax error, reference error & type error:
// Syntax error occurs when we have multiple declarations of the same variable name using let or const keywords,
// and also when we try to initialize a const without assigning any value (const a;).
// If an error is a syntax error, no memory allocation takes place, and the JavaScript file will not execute.
// Reference error occurs when we try to use a variable declared using let or const before its initialization.
// Type error occurs when we attempt to change the value type of a variable assigned via const.

