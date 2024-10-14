// print factorail of given number using js function and recursion

const factorailByJs = (num) => {
  let fact = 1;
  if (num === 0) {
    return 1;
  }
  do {
    fact = fact * num;
    num--;
  } while (num > 0);
  return fact;
};
console.log(factorailByJs(5));

const factorailByRecursion = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorailByRecursion(num - 1);
};

console.log(factorailByRecursion(10));

const opoosite = (str) => {
  if (str.length === 1) {
    return str[0];
  }
  return opoosite(str.slice(1)) + str[0];
};

console.log(opoosite("mayank"));

function getMap(callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }
  return output;
}

Array.prototype.getMap = getMap;
const dummy = [
  1, 2, 3, 1, 2, 3, 2, 4, 4, 5, 6, 7, 78, 5, 5, 4, 3, 2, 2, 2, 3, 5, 6, 2, 5, 4,
  3, 3, 4, 5, 6, 67,
];
const out = dummy.getMap((ele) => ele);
console.log(out, "-----");

function getCounter() {
  const obj = {};
  for (let i = 0; i < this.length; i++) {
    if (obj && obj[this[i]]) {
      obj[this[i]]++;
    } else {
      obj[this[i]] = 1;
    }
  }
  return obj;
}

Array.prototype.getCounter = getCounter;
const count = dummy.getCounter();
console.log(count, "count");

// write a function to elaborate factorail

const getFactorail = (num) =>
  num === 1 || num === 0 ? 1 : num * getFactorail(num - 1);

const fact = getFactorail(3);
console.log(fact, "factfact");

//Write a recursive function that takes a string as input and returns the string reversed.

const getReverse = (str) => {
  if (str.length === 1) {
    return str[0];
  } else {
    return str[str.length - 1] + getReverse(str.slice(-1));
  }
};

const reverseStr = getReverse("mukul");
console.log(reverseStr, "reverseStr");

const val = 2000;
const a = () => {
  const x = 888;
  console.log(val, "val inside a()");
  const b = () => {
    console.log(x, val, "value of x and val inside b()");
  };
  return b;
};

const returnFunc = a();

returnFunc;

// call apply bind

const obj1 = {
  firstName: "mukul",
  lastName: "anand",
  getFullName: function (city) {
    return `${this.firstName} ${this.lastName} is living in a ${city}`;
  },
};

const obj2 = {
  firstName: "vedansh",
  lastName: "tiwari",
};

const obj4 = {
  firstName: "rahul",
  lastName: "patel",
};

const str = obj1.getFullName.call(obj2, "jabalpur");
console.log(str);
const str2 = obj1.getFullName.apply(obj4, ["bhopal"]);
console.log(str2);

//polyfill of filter

function getFilter(callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
}

Array.prototype.getFilter = getFilter;

const arr3 = [2, 3, 445, 6576, 233, 27657856, 2324, 65686, 343, 4678, 343, 323];

const result3 = arr3.getFilter((ele) => ele % 2 === 0);
console.log(result3);

function getMap(callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }
  return output;
}

function getReduce(callBack, initialVal = undefined) {
  let accumulator = initialVal || this[0];
  for (let i = this[0] === accumulator ? 1 : 0; i < this.length; i++) {
    accumulator = callBack(accumulator, this[i]);
  }
  return accumulator;
}

Array.prototype.getReduce = getReduce;

const finalRes = [1, 2, 3, 4].getReduce((acc, ele) => acc + ele);
console.log(finalRes, "finalRes");

const sortArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const save = arr[i];
        arr[i] = arr[j];
        arr[j] = save;
      }
    }
  }
  return arr;
};

console.log(
  "sorted ARRay is",
  sortArr([2, 7, 5, 3, 6, 8, 5, 4, 6, 54, 6, 8, 43])
);

const reverseSting = (str) =>
  str ? str.slice(-1) + reverseSting(str.substring(0, str.length - 1)) : "";

class Employee {
  constructor(name, empId) {
    this.name = name;
    this.empId = empId;
  }
  getVal = function () {
    return `${this.name} ---> ${this.empId}`;
  };
}

const emp1 = new Employee("mukul", "ENT287");
console.log(emp1.getVal());
const emp2 = new Employee("vedansh", "MIND244");

console.log(emp2.getVal());

const fn6 = (state) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) return resolve(5454654);
      else return reject(404);
    }, 2000);
  });

const fn7 = (state) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) return resolve(3243432);
      else return reject(403);
    }, 2000);
  });

const fn8 = (state) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) return resolve(54545475757654);
      else return reject(402);
    }, 2000);
  });

// fn6(true).then((res) => {
//   console.log(res);
//   fn7(true).then ((res) => {
//     console.log(res);
//     fn8(true).then((res) => {
//       console.log(res);
//     })
//   })
// })

// fn6(true)
//   .then((res) => {
//     console.log(res);
//     return fn7(false);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((res) => {
//     console.log(res);
//     return fn8(true);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const promise = async () => {
  try {
    const res1 = await fn6(true);
    console.log(res1);
    const res2 = await fn7(false);
    console.log(res2);
    const res3 = await fn8(true);
    console.log(res3);
  } catch (error) {
    console.log(error);
  }
};

promise();
const fab = (num) => ([1, 0].includes(num) ? num : fab(num - 1) + fab(num - 2));

const getFlatten = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getFlatten(arr[i]);
    } else {
      output.push(arr[i]);
    }
  }
  return arr;
};

const print1to10 = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
};

const obj5 = {
  first_name: "mukul",
  last_name: "anand",
  getFullName: function (company) {
    return `${this.first_name} ${this.last_name} from ${company}`;
  },
};

const obj6 = {
  first_name: "vedansh",
  last_name: "tiwari",
};

const x = { ...obj5 };

x.first_name = "rahul";

const fn9 = obj5.getFullName.bind(obj6, "mindtree");

console.log(x, obj5);

// const scrollcontainer = document.getElementById("scroll-container");
// const percentScrollIndicator = document.getElementById("percent-scroll");
// const scrollIndicator = document.getElementById("scroll-indicator");

// scrollcontainer.addEventListener("scroll", (event) => {
//   const percentScroll =
//     (scrollcontainer.scrollTop /
//       (scrollcontainer.scrollHeight - scrollcontainer.clientHeight)) *
//     100;
//   const absPercent = Math.floor(percentScroll);
//   percentScrollIndicator.innerText = `${absPercent}%`;
//   scrollIndicator.style.width = `${absPercent}%`;
// });

// const scrollToTop = () => scrollcontainer.scrollTo(0, 0);

// const scrollToBottom = () =>
//   scrollcontainer.scrollTo(0, scrollcontainer.scrollHeight);

// in the array of next ele greater then return same element otherwose return -1

const nextGreaterEle = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      output.push(arr[i]);
    } else if (arr[i] < arr[i + 1]) {
      output.push(arr[i + 1]);
    } else {
      output.push(-1);
    }
  }
  return output;
};

const res = nextGreaterEle([
  2, 33, 5, 2, 2, 2, 5, 56, 7, 3, 2, 2, 5, 77, 44, 222, 6678, 222, 666, 3, 222,
  5, 222, 566, 3, 22,
]);
console.log(res);

const getDebounce = (cb, delay) => {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      cb();
    }, delay);
  };
};

const getThrottle = (cb, delay) => {
  let start = 0;
  return () => {
    const end = new Date().getTime();
    if (end - start <= delay) return;
    start = end;
    return cb();
  };
};

// console.log(this); // window
// const thisKeyword = () => {
//   console.log(this); // window
//   this.name = name
// }

// thisKeyword();

// function xzzzz (name) {
//   this.name = name
//   console.log(this); // window
// }

// const newObjName = new xzzzz('mukukul')

// xzzzz();

const studentData = [
  { id: 1, name: "mukul", marks: "247" },
  { id: 2, name: "vedansh", marks: "100" },
  { id: 3, name: "rahul", marks: "372" },
  { id: 4, name: "ayush", marks: "450" },
];

// const getOrderRank = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//    for (let j = i+1; j < arr.length; j++) {
//     if(arr[i].marks < arr[j].marks) {
//       const temp = arr[i];
//       arr[i] = arr[j]
//       arr[j] = temp;
//     }
//    }
//   }
//   return arr;
// }
const getOrderRank = (arr) => arr.sort((a, b) => b.marks - a.marks);
console.log(getOrderRank(studentData));

const arr4 = [
  1, 2, 3, 2, 3, 2, 4, 5, 5, 3, 2, 2, 3, 99, 56, 34, 23, 99, 78, 65, 65, 34, 99,
  5, 6, 3, 2, 3, 5, 2, 53, 5, 2, 9, 8, 6, 4, 9867, 3, 7, 8, 9, 9, 4, 3,
];
const getEleList = (arr) => {
  const obj = {};
  arr.map((ele) => (obj[ele] = obj[ele] ? ++obj[ele] : 1));
  return obj;
};
console.log(getEleList(arr4));
const factorial1 = (num) =>
  [1, 0].includes(num) ? num : num * factorial1(num - 1);

/**
 * Sum of Array Elements:
  Write a function that takes an array of numbers as input and returns the sum of all the elements using the reduce method.
 */

const getSum = (arr) => arr.reduce((acc, curr) => curr + acc, 0);

console.log("Sum of Array Elements:", getSum(arr4));

/**
 * Product of Array Elements:
    Write a function that takes an array of numbers as input and returns the product of all the elements using the reduce method.
 */

const getProduct = (arr) => arr.reduce((acc, curr) => curr * acc, 1);

console.log("Product of Array Elements:", getProduct(arr4));

/**
     * Flatten an Array:
        Write a function that takes an array of arrays as input and flattens it into a single array using the reduce method.
     */

const arr5 = [
  1,
  3,
  4,
  5,
  3,
  2,
  3,
  3,
  4,
  5,
  4,
  3,
  2,
  2,
  [
    1,
    2,
    3,
    [1, 2, 4, 5, 3, 2, 1, 1],
    3443,
    6,
    7,
    5,
    4,
    [1, 2, 3, 4, 5, 6],
    1,
    2,
    3,
    4,
    [1, 2, 4, 5, 6],
    1,
    3,
    4,
    5,
    6,
  ],
  7,
  8,
];

const getFlaten = (arr) =>
  arr.reduce(
    (acc, curr) =>
      Array.isArray(curr) ? acc.concat(getFlaten(curr)) : acc.concat(curr),
    []
  );
console.log(getFlaten(arr5));

/**
* Find Maximum Number:
Write a function that takes an array of numbers as input and returns the maximum number using the reduce method.
*/

const getMaxVal = (arr) =>
  arr.reduce((acc, curr) => (acc > curr ? acc : curr), arr[0]);

console.log("Find Maximum Number:", getMaxVal(arr4));

/**
 * Concatenate Strings:
Write a function that takes an array of strings as input and concatenates them into a single string using the reduce method.
 */

const strName = ["m", "u", "k", "u", "l"];

const getConcat = (arr) => arr.reduce((acc, curr) => acc + curr, "");
console.log("Concatenate Strings:", getConcat(strName));

/**
 * Counting Occurrences:
    Write a function that takes an array of items and a target item as input, and returns the count of occurrences
    of the target item in the array using the reduce method.
 */

const countingOccurance = (arr) =>
  arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1;
    return acc;
  }, {});

console.log(countingOccurance(arr4));

/**
 * Custom Reducer:
Write a function that takes an array and a custom reducer function as input, 
and applies the reducer function to the array using the reduce method.
 */

/**
 * palindrome using recurrsion
 */

// const getPalindrome = (str) => {
//   if (str.length === 1 || str === "") {
//     console.log(str, 'string');
//     return true;
//   }
//   const firstEle = str[0];
//   const lastEle = str[str.length - 1];
//   if (firstEle === lastEle) {
//     let newStr = "";
//     for (let i = 1; i < str.length - 1; i++) {
//       newStr += str[i];
//     }
//    return getPalindrome(newStr);
//   } else {
//     return false;
//   }
// };

// const getPalindrome = (str) =>  + str.toString().split('').reverse().join('') === str;

const getPalindrome = (str) => {
  if (str.length === 1 || str === "") {
    return true;
  }
  if (str[0] === str.slice(-1)) {
    return getPalindrome(str.slice(1, -1));
  }

  return false;
};
console.log(getPalindrome("level"));
const getReverseStr = (str) =>
  str.length === 1
    ? str
    : str.slice(-1) + getReverseStr(str.slice(0, str.length - 1));
console.log(getReverseStr("mukul"));

const getFacbinacci = (num) =>
  [0, 1].includes(num) ? num : getFacbinacci(num - 1) + getFacbinacci(num - 2);

function getMap(cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }
}

function getSlice(start, end) {
  const output = [];
  const length = this.length;
  const initial = start >= 0 ? start : Math.max(0, start + length);
  const final =
    typeof end !== undefined
      ? end >= 0
        ? Math.min(length, end)
        : Math.max(0, length + end)
      : length;
  for (let i = initial; i < final; i++) {
    output.push(this[i]);
  }
  return output;
}

function getReduce(cb, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = acc === undefined ? this[0] : cb(acc, this[i], i, this);
  }
  return acc;
}

const curry = (fn) => {
  return function curryfn(...args) {
    console.log(fn)
    if(args.length >= fn.length) {
      return fn(...args)
    } else {
      return function (...next) {
        return curryfn(...args, ...next)
      }
    }
  }
}



const memoize = (n) => {
  for (let i = 0; i < 100000; i++) {
    if(i===n) {
      return i
    } else {
      return -1
    }
  }
}

console.time("start")
console.log(memoize(1000));
console.timeEnd("end")