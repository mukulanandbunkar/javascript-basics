 // JavaScript Interview Questions Based on Array Polyfills

 // polyfills for flatten


 const inputArr = [1,2,[3,5,[6,7],9],4,5,7,9];

 function getFlatten () {
    const output = []
    const flaten = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])){
                flaten(arr[i])
            } else {
             output.push(arr[i])
            }      
         }
    }
    flaten(this);
    return output
 }

 Array.prototype.getFlatten = getFlatten;

 const flatenArr = inputArr.getFlatten();
 console.log(flatenArr, 'flattenArr');


 // polyfill for map

 function getMap (callBack) {
    const output = []
    for (let i = 0; i < this.length; i++) {
       output.push(callBack(this[i], i, this)) 
    }
    return output;
 }

 Array.prototype.getMap = getMap;
 const mapArr = [1,2,4,5,3,2,3,4,5,6];
 const output = mapArr.getMap((ele, index, arr) => arr);
 console.log(output, '---');

 // polyfill for filter

 function getfilter (callBack) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      if(callBack(this[i], i, this)){
        output.push(this[i])
      }
     }
     return output;
  }

  Array.prototype.getfilter = getfilter;
  const filterArr = [1,2,34,5,2,45,6,4,3,2,3,44,667,332,677,3323,6,75,2355,4754,75,3,43,643,34,5,4326,34];
  const filterResult = filterArr.getfilter((ele, index) => index %2 === 0);
  console.log(filterResult, 'filterResult');

   // polyfill for find
   function findElement (callBack) {
        for (let i = 0; i < this.length; i++) {
           if(callBack(this[i], i, this)){
            return this[i]
           }        
        }
   }

   Array.prototype.findElement = findElement;
   const findArr = [1,2,34,5,2,45,6,4,3,2,3,44,667,332,677,3323,6,75,2355,4754,75,3,43,643,34,5,4326,34];
   const findResult = findArr.findElement((ele, index) => index === 9);
   console.log(findResult, 'findResult');

    // polyfill of split 

    function getSplit (break_by) {
        const output = []
        let temp = ''
        for (let i = 0; i < this.length; i++) {
            if(this[i] === break_by || (i === this.length -1)) {
                output.push(temp)
                temp = ''
            } else {
                temp+= this[i];
            }
        }
        return output;
    }
    String.prototype.getSplit = getSplit;
    const str = 'MUKUL/ANAND/BUNKAR';
    const splitResult = str.getSplit('/');
    console.log(splitResult, 'splitResult');

    //polyfills for join()

    function getJoin (join_by = '') {
        let temp = ''
        for (let i = 0; i < this.length; i++) {
            temp = i=== 0 ? this[i] : temp + join_by + this[i]  
        }
        return temp;
    }


    Array.prototype.getJoin = getJoin;
   const joinResult = [1,2,3,5,4,5,6,6].getJoin('/')
   console.log(joinResult, 'joinResult');


   // poly fill of reduce

   function getReduce (callback, initialValue = 0) {
    let accumulator = initialValue;
      for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]) 
        getReduce((accumulator, this[i]), this[i])
      }
      return accumulator
    }
    Array.prototype.getReduce = getReduce;
    const dummy = [1,2,3,4,5]
    const res = dummy.getReduce((acc, num) => acc * num, 6)
    console.log(res , 'result');

    // polyfill of some

    function getSome (callBack)  {
        for (let i = 0; i < this.length; i++) {
            if(callBack(this[i], i, this)) {
                return true
            }  

        }
        return false
    }

    Array.prototype.getSome = getSome;

    const someResult = [1,2,3,5,4,5,6,6].getSome((ele) => ele === 2);
    console.log(someResult, 'someResult');


    // polyfill of slice
    function getSlice (start, end) {
        const s = start < 0 ? Math.max(this.length + start) : start;
        const e = end === undefined ? this.length : end < 0 ? this.length + end : end;
        const output = [];
        console.log(s, e, '----');
        for (let i = s; i < e; i++) {
           output.push(this[i])
        }
        return output;
    }

    Array.prototype.getSlice = getSlice;
    const smapleArr = [1,2,4,3,2,3,45,5];
    const result = smapleArr.getSlice(-1);
    console.log(result, 'result for slice');




