
// SHADOWING &  SCOPE 
// In JavaScript, a block is defined as anything enclosed within curly braces {}.
// A block combines a group of multiple statements and is used in places where at least a single statement is expected.

// The following example demonstrates a valid block:
{
    // This is a compound statement or block of code.
    // It contains multiple statements.
    a = 10; // Assigns the value 10 to the variable 'a'.
    console.log(10); // Logs the number 10 to the console.
}

// Previously, this if statement would throw a syntax error because it expected at least a single statement.
// Now, with curly braces, it becomes a valid JavaScript statement.
if (true) {
    a = 10; // Assigns the value 10 to the variable 'a'.
    console.log(a); // Logs the number 10 to the console.
}

// In this section, we declare variables 'a', 'b', and 'c' in the global scope.
var a = 100; // Declares 'a' in the global scope and assigns the value 100.
const b = 200; // Declares 'b' in the global scope and assigns the value 200.
let c = 300; // Declares 'c' in the global scope and assigns the value 300.

// Now, we enter a new block scope enclosed by curly braces.
{
    // Within this block scope, we declare new variables 'a', 'b', and 'c'.
    // These variables "shadow" the global variables with the same names.
    var a = 10; // This 'a' shadows the global 'a' within the block scope.
    const b = 20; // This 'b' shadows the global constant 'b' within the block scope.
    let c = 30; // This 'c' shadows the global 'c' within the block scope.

    // Inside this block scope, we can access and modify the shadowed variables.
    console.log(a); // Outputs 10 because it refers to the block-scoped 'a'.
    console.log(b); // Outputs 20 because it refers to the block-scoped 'b'.
    console.log(c); // Outputs 30 because it refers to the block-scoped 'c'.
}

// After exiting the block scope, we're back in the global scope.
// The global variables 'a', 'b', and 'c' were affected by the block scope for 'a',
// but the constants 'b' and 'c' maintain their global values.
console.log(a); // Outputs 10 because it reflects the value from the block scope.
console.log(b); // Outputs 200 because the global constant 'b' remains unchanged.
console.log(c);
// Condition 1: This may throw a reference error if 'c' is not declared in the global scope,
// as it's not accessible here due to block scoping.
// Condition 2: Outputs 300 because it reflects the value from the global scope.



// In JavaScript, variables declared with 'var' have global or function scope,
// while variables declared with 'let' have block scope.

// Here, we have a variable 'x' declared with 'var' in the global scope.
var x = 10;

{
    // Inside this block, we declare a new variable 'x' with 'let'.
    // This 'x' shadows the global 'x' only within this block.
    let x = 20;
    console.log(x, '<---x inside the scope'); // Outputs 20, as it refers to the block-scoped 'x'.
}

// Outside the block, we are back in the global scope.
// The global 'x' remains unaffected, so it's still 10.
console.log(x, '<---x outside the scope'); // Outputs 10, the global 'x' is visible here.

// Now, let's discuss the case with 'y':

// This code is commented out because it would throw a syntax error.
// 'y' is declared with 'let' in the global scope.
// {
//     // Inside this block, we try to declare 'y' again with 'var'.
//     // This is not allowed and would result in a syntax error.
//     var y = 20;
//     console.log(y, '<---y inside the scope');
// }

// console.log(y, '<---y outside the scope');

// Now, let's explore the variable 'z':

// We declare a variable 'z' with 'let' in the global scope.
let z = 20;

{
    // Inside this block, we declare a new variable 'z' with 'let'.
    // This 'z' shadows the previous 'z' only within this block.
    let z = 30;
    console.log(z, 'z inside 1st scope'); // Outputs 30, as it refers to the 1st block-scoped 'z'.

    {
        // Inside this nested block, we declare another new variable 'z' with 'let'.
        // This 'z' shadows the previous 'z' within this nested block.
        let z = 40;
        console.log(z, 'z inside 2nd scope'); // Outputs 40, as it refers to the 2nd block-scoped 'z'.
    }
}

// After exiting all block scopes, we are back in the global scope.
// The global 'z' remains unaffected, so it's still 20.
console.log(z, 'z inside global scope'); // Outputs 20, the global 'z' is visible here.
