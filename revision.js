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
const fab = (num) => [1, 0].includes(num) ? num : fab(num-1) + fab(num-2);


const getFlatten = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      getFlatten(arr[i])
    } else {
      output.push(arr[i])
    }   
  }
  return arr;
}


const print1to10 = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000*i)
    
  }
}
