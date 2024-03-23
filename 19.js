console.log("this is my 19th file");

// make a function to check two string having same length & also having same char

const sameChar = (str1, str2) => {
  if (str1.length === str2.length) {
    const splitStr1 = str1.split("");
    const splitStr2 = str2.split("");
    return splitStr1.every((ele) => splitStr2.includes(ele));
  }
  return false;
};

console.log(sameChar("mukul", "lumku"));

// Question: Implement a recursive function in machine code to calculate the factorial of a given integer.

const factorailUsingRecurssion = (num) =>
  [0, 1].includes(num) ? 1 : num * factorailUsingRecurssion(num - 1);
console.log(factorailUsingRecurssion(5));

const fibinacciSeriesUsingRecursion = (num) =>
  [0, 1].includes(num)
    ? num
    : fibinacciSeriesUsingRecursion(num - 1) +
      fibinacciSeriesUsingRecursion(num - 2);

console.log(fibinacciSeriesUsingRecursion(1));


//Question: Write a recursive function in machine code to find the sum of digits of a given positive integer.
const sumOfDigit = (num) =>  num < 10 ?  num %10  +  sumOfDigit(Math.floor(num/10)) : num;
console.log(sumOfDigit(123));

// Question: Write a recursive function in machine code to reverse a string.
const reverseString = (str) => str ? str.slice(-1) + reverseString(str.substring(0,(str.length-1))) : str

console.log(reverseString('mukul'))


