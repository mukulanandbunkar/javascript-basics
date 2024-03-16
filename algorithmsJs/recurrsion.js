// recursion is a function which can call itself

// for recursion calling we need to check base condition to restrict it othere wise it will call infinite to itself

// with the help of recursion write a function that will return thr factorail

const factorail = (num) => {
    // condition to stop recursion
    if([1,0].includes(num)){
        return 1
    } else {
        return num * factorail(num-1)
    }
}

console.log(factorail(4), 'factorail of 4 is')


//Write a recursive function that takes a string as input and returns the string reversed.

const reverseString = (string) => {
    if(string.length === 1){
        return string[0]
    } 
    return reverseString(string.slice(1)) + string[0]

}

console.log(reverseString('mukul'));

    // reverseString(ukul)+ m
    // reverseString(kul) + um
    // reverseString(ul)  + kum
    //  reverseString(l)  + ukum
    // lukum

// Write a recursive function to calculate the nth Fibonacci number. 

const getNthFabonacci = (num) => {
    if ([0,1].includes(num)){
        return num
    }
    return getNthFabonacci(num-1) +  getNthFabonacci(num-2);
}


console.log(getNthFabonacci(8) )// [0,1,1,2,3,5,8,13,21] --->21

// getNthFabonacci(7) + getNthFabonacci(6)
//                                         + getNthFabonacci(5)+ getNthFabonacci(4)
//                                                                                  + getNthFabonacci(3)+ getNthFabonacci(2)
//                                                                                                                          + 1 + 0


// Write a recursive function to calculate the sum of the digits of a positive integer.

// const sumOfDigits = (n) => String(123).split('').reduce((x,y) => parseInt(x)+parseInt(y), 0);

// using recursion


// Method 1
// const sumOfDigits = (num) => {
//     if (isNaN(num)) {
//         return 0
//     }
//     const  toStr = String(num);
//     return  parseInt(toStr[0])+ sumOfDigits(parseInt(toStr.slice(1)))

// }


// Method 2 

const sumOfDigits = (num) => {

    if(num < 10 ) {
        return num
    } 
    return num%10 + sumOfDigits(Math.floor(num/10))
}

// Example usage:
console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3)



// Write a recursive function to calculate the result of raising a base b to the power of an exponent e.

function power(base, exponent) {
    if (!exponent) {
     return 1;
    }
 
     return base * power(base, exponent - 1);
   }
   
   // Example usage:
   console.log(power(2, 3)); // Output: 8 (2^3)


   // Write a recursive function to check if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward. Ignore spaces, punctuation, and capitalization.

   function isPalindrome(str) {
    // Base case: If the string has 0 or 1 characters, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Compare the first and last characters, and recursively check the substring in between
    const firstChar = str[0].toLowerCase();
    const lastChar = str[str.length - 1].toLowerCase();
  
    if (firstChar === lastChar) {
      // Recursive case: Check if the substring without the first and last characters is a palindrome
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
  
  // Example usage:
  console.log(isPalindrome("level")); // Output: true
  console.log(isPalindrome("Hello")); // Output: false
  console.log(isPalindrome("Amana plan a canal Panama")); // Output: false
  
  

// bubbling and capturing face ---- bubble sort----polyfills

// how faltten an array suing recursion 


const arr = []
const getFaltten = (array) =>  array.map((ele) => Array.isArray(ele) ?  [...getFaltten(ele)] : arr.push(ele)); 
console.log(getFaltten([1,2,[3,[4,5],6],9]));
console.log(arr);




