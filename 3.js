// Understanding Undefined vs Not-Defined

// In JavaScript, a variable is said to be "undefined" if it has been declared,
// but it doesn't yet have a value assigned to it. It occupies a memory space in the current
// execution context, but the value is not set.
console.log(b); // Prints undefined due to hoisting; memory allocation happens for b.

var a; // Declaration of variable a.
var b = 10; // Declaration and initialization of variable b.

// The following line prints "a is undefined" since variable a has been declared but not assigned a value.
if (a === undefined) {
    console.log('a is undefined');
} else {
    console.log('a is defined');
}

// Define a function named x.
function x() {
    a = 10; // Assign a value to variable a.
}

x(); // Call function x, which sets the value of a to 10.

console.log(a); // Prints 10, as the value of a has been assigned.

// The following line prints "b is defined" because variable b has been assigned a value.
if (b === undefined) {
    console.log('b is undefined');
} else {
    console.log('b is defined');
}

// In summary, "undefined" refers to a variable that has been declared but lacks a value,
// while "not-defined" implies that no memory allocation has been made for the variable.
// JavaScript hoisting and scope contribute to these behaviors.