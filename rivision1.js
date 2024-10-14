const memoize = (n) => {
  const catche = {};
  if (catche[JSON.stringify(n)]) {
    return catche[JSON.stringify(n)];
  }
  for (let i = 0; i < 100000; i++) {
    if (i === n) {
      catche[JSON.stringify(n)] = n;
      return i;
    }
  }
};

console.time("momoize");
console.log(memoize(10007));
console.timeEnd("momoize");

// function toconvert non currying function to currying

function curry(fn) {
  return function curriedFunc(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const currySum = curry(sum);

console.log(currySum(1)(2)(3)(4), sum(1, 2, 3, 4));

// write a addition dunction which can take n no. of curry

const sum1 = (a) => (b) => b ? sum1(a + b) : a;

console.log(sum1(1)(2)(3)());

const a = {};
const b = { type: "b" };
const c = { type: "c" };

a[b] = 233;
a[c] = 466;
console.log(a[b], a[c]);

// write a function which check maxmum palidrome in given string

const maxPalindrome = (str) => {
  let max = 0;
  let maxStr = "";
  for (let i = 0; i < str.length; i++) {
    const initialLetter = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (initialLetter === str[j]) {
        const palidromeString = str.substring(i, j + 1);
        if (
          palidromeString.split("").reverse().join("") === palidromeString &&
          palidromeString.length > max
        ) {
          maxStr = palidromeString;
          max = palidromeString.length;
        }
      }
    }
  }
  return maxStr;
};

console.log(maxPalindrome("abracecarxyz"));

let name = "name1";
function temp() {
  name = "name2";
  function name() {
    console.log("hello world");
  }
  name();
}

temp(); // Error since the name =

// polyfill of slice

const getSlice1 = (start, end) => {
  const length = this.length;
  const initial = start >= 0 ? start : Math.max(0, length + start);
  const final =
    typeof end !== undefined
      ? end >= 0
        ? Math.min(length, end)
        : Math.max(0, end + length)
      : length;
  const result = [];
  for (let i = initial; i < final; i++) {
    result.push(this[i]);
  }

  return result;
};
