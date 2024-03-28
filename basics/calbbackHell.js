/**
 * As we all know that the Js is single threaded and synchronous in nature
 * but there is some web API in js which show aynchronous behaviour
 */

// console.log('this will print 1st')
// console.log('this will print 2nd')
// console.log('this will print 3rd')

/**
 * but if i will use web API function let say settimeout it will show the async behaviour
 */

// console.log('this will print 1st')

// setTimeout(() => {
//     console.log('this will print 2nd')
// }, 1000);
// console.log('this will print 3rd')

/**
 * OUTPUT
this will print 1st
this will print 3rd
this will print 2nd
 */

/**
 *
 * let we try to explore more with  settimeout in the function
 */

// console.log('this will print 1st')

// function fn() {
//     setTimeout(() => {
//         return 2000;
//     }, 1000);
// }

// const a = fn()
// console.log(a) // print undefined since value will come after 1 sec and js will not wait it will execute
// console.log('this will print 3rd')

/**
 * How to resolve above problem
 */

console.log("this will print 1st");

function fn(callback) {
  setTimeout(() => {
    return callback(2000);
  }, 1000);
}

function fn1(callback) {
  setTimeout(() => {
    return callback(1000);
  }, 2000);
}

function fn2(callback) {
  setTimeout(() => {
    return callback(102343);
  }, 3000);
}

/**
 * Below is the example of call back hell to resolve above we have certain techniques
 * 1. .then()
 * 2. async await
 */

const a = fn((response) => {
    console.log(response)
    fn1((res) => {
        console.log(res)
        fn2((res) => {
            console.log(res)
        })
    })

})
console.log(a) // print undefined since value will come after 1 sec and js will not wait it will execute
// above problem can be resolve using promise ans async awiat


