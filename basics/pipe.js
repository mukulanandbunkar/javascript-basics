const multiplyFour = (num) => num*4;
const addTwo = (num) => num + 2;
const substractFive = (num) => num - 5;

// const composite = (...args) => {
//     return (num) => {
//         let result = num;
//         for (let i = (args.length-1); i >= 0; i--) {
//             const fn = args[i]
//             result =  fn(result)        
//          }
//          return result
//     }
// }

const composite = (...args) => (num) => args.reverse().reduce((accum, currentVal) => currentVal(accum), num );

const evaluate = composite(multiplyFour, addTwo, substractFive )
console.log(evaluate(5))



