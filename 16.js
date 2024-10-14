let var1;
console.log(typeof(var1)); //undefined

const var2 = null;
console.log(typeof(var2)); // object

// write a function which add num to array

const arr = [1,2,3];

//first approach
const appendViaPush = (array, num) => arr.push(num);

const pushResult = appendViaPush(arr, 1000);
console.log(arr, 'originalArray') // ---original array changes
console.log(pushResult, 'pushResult'); // 4 ---length of array

// second approach
const arr2 = [12,23,45,34]
const pushViaSpread = (array, num) => [...arr, num]
const spradPushRes =  pushViaSpread(arr2, 33333);
console.log(spradPushRes, 'spradPushRes') // ---will get push result
console.log(arr2, 'arr2 '); // --- remain as it is

