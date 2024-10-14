console.log('this is for palindrome')

//Question An interger is a plindrome when it reads the same in forward and backwards

//Input x =121 ------>>>> Output: true
//Input x =10 ------>>>> Output: false

// Approach 1
//using recussion
const isPalindrome1 = (number) => {

    let num  = String(number)
    if(!num) {
        return true
    }
   if (num.slice(-1) === num.slice(0,1)) {
    return isPalindrome1(num.slice(1,-1))
   } else {
    return false
   }
}

// Approach 2
const isPalindrome2 = (num) => num === +num.toString().split('').reverse().join('');
//notes
// +'1' = 1
// +'a' = NaN
// +num.toString().split('').reverse().join('') --> return num with reverse





console.log(isPalindrome2(121))