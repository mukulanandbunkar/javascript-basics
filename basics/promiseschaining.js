/**
 * Promise chaniniig
 * promise chaining is nothing but a one promise is dependendent on another let we see the example below
 */

const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1000);
    }, 1000);
  });
};

const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5000);
    }, 1000);
  });
};

const fn3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10000);
    }, 1000);
  });
};

// Approach 1
// it give us messy structure
// fn1().then((res) => {
//   console.log(res);
//   fn2().then((res) => {
//     console.log(res);
//     fn3().then((res) => {
//       console.log(res);
//     });
//   });
// });

// Approach 2
// this is more arranged way of chaining
// fn1()
//   .then((res) => {
//     console.log(res);
//     return fn2();
//   })
//   .then((res) => {
//     console.log(res);
//     return fn3();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Approach 3
// async await + IIFE

// (async () => {
//   const res1 = await fn1();
//   console.log(res1);
//   const res2 = await fn2();
//   console.log(res2);
//   const res3 = await fn3();
//   console.log(res3);
// })();

//Approach 4
/**
 * in Promise.all() approach if atleast one promise is fail it will fail complete
 */
Promise.all([fn1(), fn2(), fn3()])
  .then((res) => {
    console.log(res); // prints [ 1000, 5000, 10000 ]
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * in Promise.reject check with very first promise that is resolve or reject
 */

Promise.race([fn1(), fn2(), fn3()])
  .then((res) => {
    console.log(res); // 1000
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * in Promise.allSettled check with all promise and also return all promise in the form of array wheather it is resolved or rejected
 */

Promise.allSettled([fn1(), fn2(), fn3()])
  .then((res) => {
    console.log(res); // 1000
  })
  .catch((error) => {
    console.log(error);
  });


  /**
 * in Promise.any check with atlease 0ne promise is resolved
 */

Promise.any([fn1(), fn2(), fn3()])
.then((res) => {
  console.log(res); // 1000
})
.catch((error) => {
  console.log(error);
});
