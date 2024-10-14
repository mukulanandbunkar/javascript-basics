/**
 * Promise
 * promise is either resolve or reject
 * promise if promise resolve or reject we can handle result via two methods
 * 1. aync await
 * 2. then().catch()
 */

const b = new Promise((resolve, reject) => {
  const result = true;
  if (result) return resolve(2000);
  else reject(new Error("Result is not found"));
});

/**
 * handle via .then().catch()
 */

const response = b;

response
  .then((res) => {
    console.log(res, "res");
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * we can handle abpove via async awiait also
 */

(async () => {
  try {
    const result = await b;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
