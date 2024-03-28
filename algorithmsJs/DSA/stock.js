// Best time to sell the stocks
// you are given an array prices where prices[i] is the price of a given stock
// on the ith day
// you want to maximoze your profit by choosing a single day to buy one stock
// and choosing a different dayb in the future to sell that stock
// return the maximum profit, if you cannot achoeve any profit retirn 0

// Input prices = [7,1,5,3,6,4] --> output 5
// input proces = [7,6,4,3,2,1] ------->>>> output 0

const stock = (arr) => {
  const str1 = arr.join("");
  const str2 = [...arr].sort((a, b) => b - a).join("");
  if (str1 === str2) return 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max) {
        max = arr[j];
      }
    }
  }
  return max;
};

console.log(stock([7,1,5,3,6,4]));

/*
[7,6,4,3,2,1] ---> decreasing order ---> loss only
[7,1,5,3,6,4] ---> is i will buy 7 atleast should be > 7
 */
