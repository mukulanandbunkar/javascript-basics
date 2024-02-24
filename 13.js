//indexOf(value, startindex)

const num = [20, 1,2,3,4,5,6,7,6,5,4,2,1,4,6,7,8];
const indexOf20 = num.indexOf(20, 1)
console.log('index of 20 is after 1st index is', indexOf20); //-1

// indexOf is taking two params and return index no. if found or -1 if not found
// first param is the value whose index we want 
//second param is the startpoint from where we need to search
// deafult value of second param is 0
const indexOf1 = num.indexOf(1, 3) 
console.log(indexOf1, 'index of 1 after 3rd index'); // 12

//includes(value, startindex);

const arrNum = [23,34,56,76,54,32,12,1,3,15,1,67,76,80,98,76,54,23,45];
const is23 = arrNum.includes(23); //check if 23 is exist in the arrNum gives true
console.log( '23 is there in the array?', is23) // true
const is54 = arrNum.includes(54, 4); // check is 54 is there after 4th index and return true in that case
console.log('is 54 is present in array after 4th index: ', is54)
const is99 = arrNum.includes(99);
console.log('is 99 present in the array: ', is99);


// reduce(callback(accumulator, currentValue, index, array), initialValue)

const strArr = ['m', 'u', 'k', 'u','l'];
const finalStr =strArr.reduce((acc, currentVal) => acc+currentVal, '');
console.log(finalStr, 'final string after joining');

const sumArr = [23,45,6676,22,556,2335,67775,24343,5657];
const totalSum = sumArr.reduce((acc,val) => acc+val, 0);
console.log('total sum of sumArr is:', totalSum);


// Sorting an array of strings
const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]

// Sorting an array of numbers (not recommended for accurate numerical sorting)
const numbers = [5, 1, 20, 3];
numbers.sort();
console.log(numbers); // Output: [1, 20, 3, 5] (incorrect order for numbers)

// Sorting an array of numbers using a compare function for numerical  ascending order
numbers.sort(function(a, b) {
    console.log(a, b, '<<----')
  return a - b;
});
console.log(numbers); // Output: [1, 3, 5, 20] (correct numerical order)

// Sorting an array of numbers using a compare function for numerical  decending order
numbers.sort(function(a, b) {
    console.log(a, b, '<<----')
  return b -a ;
});
console.log(numbers);
