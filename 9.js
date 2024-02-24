
// forEach(callback(element, index, array), thisArg)
const arr = [1,2,3,4,5,6,7,8,5,4,3,2,1];
console.log(arr, 'before forEach()'); // [1,2,3,4,5,6,7,8,5,4,3,2,1]
const arrDouble = arr.forEach((element, index, arr) =>{
    console.log(`arr[${index}] = ${element} of array ${arr}`)
    return  element;
});
console.log(arr, 'after forEach()'); // [1,2,3,4,5,6,7,8,5,4,3,2,1]
console.log(arrDouble, 'arrDouble'); // undefined

// 1. didnt change the element of orginal array
// 2. return undefined
// 3. we can modify array in callback that like below example

arr.forEach((element, index, arr) => arr[index] = element * index);
console.log(arr, 'array after modification is callback')



const myObject = {
    value: 10,
    numbers: [1, 2, 3, 4],
    multiply: function () {
      this.numbers.forEach(function (num) {
        console.log(num * this.value);
      }, this); // Setting thisArg to the current object
    }
  };
  
  myObject.multiply();
  
