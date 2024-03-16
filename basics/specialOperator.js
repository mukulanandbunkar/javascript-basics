

const Obj1 = {
    town: 'jbp',
    state: 'mp',
    ip: '122.33.55.44'
}
// delete
// it is used to delete the key from the object
console.log(Obj1, 'before delete');
delete(Obj1.ip);
console.log(Obj1, 'after delete');


// in
// check if object has the given property

const isTown = 'town' in Obj1; // note key-name always is in string
console.log(isTown, 'isTown');

// new 

// it is used to create new obj instance

const arr1 = new Array;
console.log(arr1.length, 'print 0 because new Array will create empty array');

const Obj2 = new Object;
console.log(Obj2, 'print {}');

const date = new Date;
console.log(date, 'print date in IST');

const boolean = new Boolean;
console.log(boolean, 'prints Boolean {false}');

const num = new Number;
console.log(num, 'prints Number{0}');

const str = new String;
console.log(str, 'prints String{""}');

//instanceOF
//check the object is instance if given tyoe

const isObj = Obj1 instanceof Object;

console.log(isObj, 'isObj is a instance of Object its true')

