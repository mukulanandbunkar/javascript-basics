console.log('This is my 7th JavaScript file.');

// Define a function 'x' which contains a variable 'a' with a value of 10.
// Inside 'x', there's another function 'y' that logs the value of 'a'.
function x() {
    const a = 10;

    function y() {
        console.log(a);
    }

    // 'x' returns 'y', which is a closure, bundling both the function and its scope.
    return y;
}

// Assign the result of calling 'x' to the variable 'z'.
const z = x();

// 'z' contains the entire scope of 'x', so it's not just the function 'y'.
console.log(z); // z will return the definition of function 'y'

// When you call 'z', it still remembers the value of 'a' from its enclosing scope.
z(); // It will print the value 10

// Important point to remember:
// In JavaScript, a closure is a combination of a function and its lexical (enclosing) scope.
// Even though JavaScript is single-threaded, when 'z' is called, it retains the value of 'a'
// because the closure includes the entire scope, demonstrating the concept of scoping.
