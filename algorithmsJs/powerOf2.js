// WRITE  FUNCTION WHICH DETERMINE THE GIVEN NUMBER IS POWER OF 2 OR NOT

const isPowerOf2 = (num) => {
  let number = num;
  do {
    if (number % 2 === 0) {
      number = number / 2;
    }
  } while (number % 2 === 0);

  return number === 1;
};

console.log(isPowerOf2(1));

const isPowerOf = (num, power) =>
  num % power === 0 ? isPowerOf(num / power, power) : num === 1;

console.log(isPowerOf(64, 4));
