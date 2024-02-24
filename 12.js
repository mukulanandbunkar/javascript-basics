// filter(callback(element, index, array), thisArg)
const arr = [1,2,3,4,5,6,7,8,5,4,3,2,1];
console.log(arr, 'before filter()'); // [1,2,3,4,5,6,7,8,5,4,3,2,1]
const filterArr = arr.filter((element, index, arr) =>{
    console.log(`arr[${index}] = ${element} of array ${arr}`)
    return  element % 2 === 0;
});
console.log(arr, 'after filter()'); // [1,2,3,4,5,6,7,8,5,4,3,2,1]
console.log(filterArr, 'filterArr'); // [ 2, 4, 6, 8, 4, 2 ] 

// 1. didnt change the element of orginal array
// 2. return filtered data
// 3. we can modify array in callback that like below example

arr.filter((element, index, arr) => arr[index] = element * index);
console.log(arr, 'array after modification is callback')



const myObject = {
    value: 10,
    numbers: [1, 2, 3, 4],
    multiply: function () {
      this.numbers.filter(function (num) {
        console.log(num * this.value);
      }, this); // Setting thisArg to the current object
    }
  };
  
  myObject.multiply();


const threshold = 3;
const numbers = [1, 2, 3, 4, 5];

// Using `thisArg` to set the context in the callback function:
const greaterThanThreshold = numbers.filter(function (num) {
  return num > this;
}, threshold);

console.log(greaterThanThreshold); // Output: [4, 5]
