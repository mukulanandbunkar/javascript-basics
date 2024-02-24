// write a function to print factorial of give number

// factorial of 0 is 1 ---> 0! = 1
// factorail of 5 is 5x4x3x2x1 = 120

// method 1
const getFactorial = (n) => {
    let factorail = 1;
    for(let i = n ; i > 0 ; i--){
        factorail = factorail *  i
    }
    return factorail;
}

console.log(getFactorial(0));


