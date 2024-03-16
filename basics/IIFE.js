// IIFE (Immediately Invoked Function Expression) - Definition and Usage

// IIFE is a JavaScript function that runs as soon as it is defined. 
// It is a common pattern used to encapsulate variables and functions to avoid polluting the global scope.

const a = () => new Promise((resolve, reject) => {
    // This function returns a Promise that resolves after 2 seconds
    setTimeout(() => {
        resolve(() => 12 + 12); // Resolves with a function that returns the sum of 12 and 12
    }, 2000);
});

// Async IIFE (Immediately Invoked Async Function Expression)
// Here, an async IIFE is defined and immediately executed.
(async function () {
    // Inside the async function

    // Wait for the Promise returned by function 'a' to resolve
    const d = await a();
    // 'd' now holds the resolved value, which is a function that returns 24 when invoked
    console.log(d()); // Output: 24

    // Call function 'a' again
    const e = await a();
    // 'e' now holds the resolved value, which is again a function that returns 24 when invoked
    console.log(e()); // Output: 24
})();
