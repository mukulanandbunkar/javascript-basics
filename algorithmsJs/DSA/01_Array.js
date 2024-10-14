// Array declaration

let arr = new Array();

let arr1 = [];

let person = {
  name: "mukul",
  age: 29,
};

let arr2 = ["apple", "banana", "cherry", person];

console.log(arr2[0]); // accessing the array element

// array can store any data type

console.log(arr2[3].name); // mukul

// Arrays - Add and remove element

arr2.push("orange");
arr2.pop();
arr2.pop();

// shift and unshift

arr2.unshift("cherry");

//looping in array

for (let i = 0; i < arr2.length; i++) {
  const element = arr2[i];
  console.log(element);
}


let i=0;
while(i < arr2.length) {
    const element = arr2[i];
    console.log(element);
    i++;
}
