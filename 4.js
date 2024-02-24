// Lexical Environment and Scope

// Assignment to b before declaration is allowed, but it's not a recommended practice.
// This will create a global variable b and assign it a value of 20.
b = 20;

// Call the function a. This initiates the chain of function calls.
a();

// Define the function a.
function a() {
  // Call the function c from within function a.
  c();

  // Define the function c within function a.
  function c() {
    // The function c accesses and logs the value of b.
    // Since b is declared globally, it will have a value of 20.
    console.log(b);
  }
}

// Declare the variable b.
var b;

// In the scope of function c, the local environment consists of its own variables,
// as well as the variables from its parent function a, and ultimately the global environment.
// This is why the output of b is 20, as it's assigned globally with that value.
// This behavior is a result of lexical environment and scope chaining.
