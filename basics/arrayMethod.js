let array = ['jan',  'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

// slice
/**
 * slice is used to slice out the array from given index to the index
 * it can take start index and end index
 * both index can be positive or negative or 0
 * slice will not change the original array
 * it just return the  array that is sliced
 */

console.log(array.slice(0,3)); // [ 'jan', 'march', 'april' ]
console.log(array.slice(0,-1));
/**
  [
  'jan',     'march',
  'april',   'may',
  'june',    'july',
  'august',  'september',
  'october', 'november'
]
 */

console.log(array.slice(2,-3)); //[ 'april', 'may', 'june', 'july', 'august', 'september' ]


//splice
/**
 * splice having is not taking -ve parmas as a argument it must be +ve or 0
 * we can pass third param to replace the array, second params is how much element we want to delete 
 * it will return same output as slice but it will change the array afterwards
 */

console.log(array.splice(2, 2, 'mukul')); //[]
console.log(array);
/**
 [
  'jan',       'march',
  'mukul',     'june',
  'july',      'august',
  'september', 'october',
  'november',  'december'
]
 */
