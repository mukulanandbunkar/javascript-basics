// print factorail of given number using js function and recursion

const factorailByJs = (num) => {
    let fact = 1;
    if (num === 0){
        return 1;
    } 
    do {
        fact = fact * num;
        num --
    } while (num > 0)
    return fact;
}
console.log(factorailByJs(5))


const factorailByRecursion = (num) => {
    if(num === 0 || num === 1)
    {
        return 1
    }
    return num * factorailByRecursion(num -1)
}

console.log(factorailByRecursion(10));


const opoosite = (str) => {
    if(str.length === 1){
        return str[0];
    }
    return opoosite(str.slice(1)) + str[0];
} 

console.log(opoosite('mayank'));


function getMap (callback) {
const output = [];
for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this))
}
return output;
}

Array.prototype.getMap = getMap;
const dummy = [1,2,3,1,2,3,2,4,4,5,6,7,78,5,5,4,3,2,2,2,3,5,6,2,5,4,3,3,4,5,6,67];
const out = dummy.getMap((ele) => ele);
console.log(out ,'-----')


function getCounter () {
    const obj = {}
    for (let i = 0; i < this.length; i++) {
        if(obj && obj[this[i]]) {
            obj[this[i]]++
        } else {
            obj[this[i]] = 1
        }  
    }
    return obj;
}

Array.prototype.getCounter = getCounter;
const count = dummy.getCounter();
console.log(count, 'count');
