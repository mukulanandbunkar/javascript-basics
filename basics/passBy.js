// In JS Pass By Value/reference
//In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.


// premitive data type

let x =2;
const y = x;
x=1000;

console.log(x); // prints 1000
console.log(y); // prints 2


//non-primitive data


// case 1

let Obj1 = {
    name: 'mukul',
    surname: 'anand'
}

const Obj2 = Obj1;

Obj1 = false;

console.log(Obj2)


// case 2


const Obj = {
    city: 'jbp',
    state: 'MP'
}

const ObjCopy = Obj

Obj.state = 'Karnataka'
delete(Obj.city) // perform delete using delete

console.log(ObjCopy, 'prtins --> {state : "Karnataka"}')



