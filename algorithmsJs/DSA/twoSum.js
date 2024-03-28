// TWO SUM
// Given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target

// Inpot nums = [2,7,11,15] target = 9
// Output : [0,1] (Because num[0] + num [1] == 9, we return [0,1])


const twoSum1= (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i +1 ; j < nums.length; j++) {
       if (nums[i] + nums[j] === target) {
        return [i,j]
       }        
    }   
  }
  return []
}

//console.log(twoSum1([2,7,11,15], 26))


const twoSum2 = (nums, target) => {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if(obj[target-n] >= 0) {
        return [obj[target-n], i]
    } else {
        obj[n] = i
    }    
  }
  return []
}

console.log(twoSum2([2,7,11,15], 26))

