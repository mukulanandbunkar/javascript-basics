// One of the most commonly asked interview questions in JavaScript.

// Question: Which console statement will execute first?

function x() {
    var a = 1;

    // setTimeout takes a callback function and a time delay of 3000ms (3 seconds).
    // It stores this callback function and executes it after the specified delay.
    setTimeout(() => {
        console.log(a); // This statement will execute after 3 seconds.
    }, 3000);

    // This statement will execute immediately.
    console.log('This will print 1st');
}

// Call the function 'x', initiating the execution.
x();

// In this example, the key concept is closure. The setTimeout function captures the value of 'a' and
// bundles it with the callback function. So, 'this will print 1st' will be logged first, and
// after a 3-second delay, the value of 'a' (which is 1) will be logged.




// Q2: Write a function that prints numbers from 1 to 6 at 1-second intervals.

// The original function uses 'var' for 'i', resulting in unexpected output.
function y() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
}

y(); 

// The output will be 6, 6, 6, 6, 6, 6. This happens because 'var' has function scope, and all
// the setTimeouts capture a reference to the same variable 'i', which has the final value of 6.

// To correct the behavior, replace 'var' with 'let' to give 'i' block scope, ensuring that each
// iteration has its own 'i' value:

function z() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
}

z(); 

// This will work as expected and print numbers from 1 to 6 at 1-second intervals.

// If you want to use 'var' and have a different scope for each iteration, you can create a closure
// by wrapping the setTimeout in a function that takes 'a' as an argument:

function w() {
    for (var i = 0; i <= 5; i++) {
        function close(a) {
            setTimeout(() => {
                console.log(a);
            }, 1000 * a);
        }
        close(i);
    }
}

w();

// This will also print numbers from 1 to 6 at 1-second intervals while using 'var' for 'i'.