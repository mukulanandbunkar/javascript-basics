// 1. What are the different data types present in javascript?

    // 1. Primitive types
    typeof('mukul') // string
    typeof(23) // number
    typeof(9007199254740991)



    // WAF in which we have an array of input we have to sort the array on the basis of occirance if occurance is same shortest will come first


    // input : array
    // output : sorted array in which sorting on  the basis of occurace more occur come first and if same occurance then it smaller will be the first


    const getSort  = (arr) => {
        const occuranceObj = {}
        const sortedArr = []
        for (let i = 0; i < arr.length; i++) {
           if(occuranceObj[i]) {
            occuranceObj[i]++
           } else {
            occuranceObj[i] = 1
           }
        }
       const occuranceObjArr = Object.entries(occuranceObj)
       for (let j = 0; j < occuranceObjArr.length; j++) {
        const [key, val] = occuranceObjArr[j];
        for (let k = 0; k < val; k++) {
            sortedArr.push(key)    
        }       
       }
       return sortedArr;
    } 