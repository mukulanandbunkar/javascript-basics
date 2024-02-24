
// map(callback(element, index, array), thisArg)
const arr = [1,2,3,4,5,6,7,8,5,4,3,2,1];
console.log(arr, 'before map()'); // [1,2,3,4,5,6,7,8,5,4,3,2,1]
const arrDouble = arr.map((element, index, arr) =>{
    console.log(`arr[${index}] = ${element} of array ${arr}`)
    return  element *2;
});
console.log(arr, 'after map()'); // [1,2,3,4,5,6,7,8,5,4,3,2,1]
console.log(arrDouble, 'arrDouble'); // [2,4,6,8,10,12, 14, 16, 10, 8,  6,  4, 2] 

// 1. didnt change the element of orginal array
// 2. return undefined
// 3. we can modify array in callback that like below example

arr.map((element, index, arr) => arr[index] = element * index);
console.log(arr, 'array after modification is callback') 
/* [
    0,
    2,
    6,
    12,
    20,
    30,
    42,
    56,
    40,
    36,
    30,
    22,
    12
] */



const myObject = {
    value: 10,
    numbers: [1, 2, 3, 4],
    multiply: function () {
      this.numbers.map(function (num) {
        console.log(num * this.value);
      }, this); // Setting thisArg to the current object
    }
  };
  
  myObject.multiply();

/*
    10
    20
    30
    40
*/