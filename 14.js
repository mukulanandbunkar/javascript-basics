//Q1 Given an array of integers, write a function to find the sum of all even numbers.

const numArr = [1,2,3,4,5,3,2,1,6,7,98,64,34,54,56,55,43,23,76,56,4,3,2,4,21,41,56,79,87,85,35,55,4,32,23,43,53,65];
const sumOfEvenWithFilter = numArr.filter((element) => element%2===0).reduce((acc,num)=> acc+num, 0); 
const sumOfEvenWithReduceOnly = numArr.reduce((acc,num) => num%2===0 ? acc + num : acc, 0);
console.log('sum of all even in numArr with filter and reduce is', sumOfEvenWithFilter);
console.log('sum of all even in numArr with reduce only is', sumOfEvenWithReduceOnly)

//Q2 Given an array of integers, write a function to find the sum of all even numbers.

const intArr = [-1,2,-4,-6,-7,4,56,-78,99,-89,34,65,-566];
const sumOfPositive = intArr.reduce((acc, num) =>  num > 0 ? acc + num : acc, 0);
console.log(sumOfPositive, 'sum of all positiove is')

//Q3 write a function which return obj saying number of element and element as value and key resp

const strArr = ['r','t', 'r', 'y', 't', 'a', 'b', 'y', 'a', 'b', 'r', 'l', 'b'];
let Obj = {}
 strArr.forEach(ele => Obj[ele] ? Obj[ele]++ : Obj[ele]  = 1)
 console.log(Obj)

 // Q4 Write a program to find the  largest element in an array.

 const ascendingArr = [23,45,67,87,65,34,56,87,90,87,65,12,34,67,4,7,2];
 //using reduce
 const largest = ascendingArr.reduce((acc, num) => acc >  num ? acc : num, ascendingArr[0]);
 console.log(largest, 'largest number of the array ')

 //using sort
const descendingArr = ascendingArr.sort((a,b) => b-a);
console.log(descendingArr, 'decending array');
console.log('second largent is:', descendingArr[1])


// write a function to find the index of a particular element and -1 if not found

function getIndexOf (ele) {
    for (let i = 0; i < this.length; i++) {
       if(this[i] === ele) {
        return i
       }       
    }
    return -1;
}

Array.prototype.getIndexOf = getIndexOf;
const sampleArr = [1,2,4,5,3,2,4,5,6,67,7,5,43436,665,47,2,43,645,434,3,64,56,3,534,65,74,25,35]
const indexOfRes = sampleArr.getIndexOf(9999);
console.log(indexOfRes ,'indexOfRes');

// roatate the array upto k times

// const arr = [1,2,3,4,5]

// const rotateArr = (array, k) => {
//     const 
//     do {

//         k--;
//     } while(k === 0)
// }





