// deep copy vs shwallow copy

const obj = {
    name: 'mukul',
    surname: 'anand',
    rollno: '12345334',
    marks: [90,65,33,56,87,54],
    food: {
        'indian': 'dal-roti',
        'chinese': 'noodles',
        'fast food': 'pizza'
    }
};
 // Shwallow Copy
const shwallow_copy = {
    ...obj
}

shwallow_copy.name = 'akash'
shwallow_copy.surname = 'tiwari'
shwallow_copy.food.indian = 'chicken-roti'
shwallow_copy.marks.push(333)
console.log(shwallow_copy, 'shwallow copy obj after changes');
console.log(obj, 'obj after shwallow copy chnages')

// output
// {
//     name: 'mukul', ----as it is
//     surname: 'anand', --- as it is
//     rollno: '12345334',
//     marks: [
//       90, 65,  33, 56,
//       87, 54, 333
//     ], ----updated
//     food: { indian: 'chicken-roti', chinese: 'noodles', 'fast food': 'pizza' } ----updated
//   }

// since obj and array is non premitive data types its copy in shallow copy via pass by refrence hence updated nut name and surname is pass by value so its not updated via shallow copy.


 // Deep Copy

 const deep_copy = JSON.parse(JSON.stringify(obj));

 deep_copy.name = 'rahul'
 deep_copy.surname='bajaj'
 deep_copy.marks.push(10000)
 deep_copy.food.chinese = 'mushroom'

console.log(deep_copy, 'deep copy obj after changes'); 
//output 
// {
//     name: 'rahul',
//     surname: 'bajaj',
//     rollno: '12345334',
//     marks: [
//        90,    65, 33,
//        56,    87, 54,
//       333, 10000
//     ],
//     food: { indian: 'chicken-roti', chinese: 'mushroom', 'fast food': 'pizza' }
//   } 


console.log(obj, 'obj after deep copy') 
// --- as it is
// output
// {
//     name: 'mukul',
//     surname: 'anand',
//     rollno: '12345334',
//     marks: [
//       90, 65,  33, 56,
//       87, 54, 333
//     ],
//     food: { indian: 'chicken-roti', chinese: 'noodles', 'fast food': 'pizza' }
//   } 


// In deep copy the object will be as it is changes only reflected on the deep_copy obj

