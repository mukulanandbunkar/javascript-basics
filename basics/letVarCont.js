/*
SCOPE
certain area of a scopr where defined variable is recognize and outer that it will not recognized
{
   block scope
}

function x () {
    function scope
}
global scope var a outside anywhere


 */

{
  var a = 10;
}

console.log(a); //prints 10 since var has global scope

{
  let x = 1000;
}

//console.log(x)  //this line will throws error since let declared inside the scope same with const ---> ReferenceError: x is not defined

/*
Shadowing in JS
let and const having shadowing phenomenon in which its value will be different inside a particular scope 
in the below example we can see value of y is 1000 shadowing inside the scope same with const

ILLIGAL SHADOWING
we cant change let with const inside the scope that is called illigal shadowing but we can change let with const inside the scope
let y = 90
{
    const y = 9000  // possible // shadowing
}
{
    let y = 9000 //possible // shadowing
}
{
    var y = 9000 // not possible ---- illigal shadowing
}
 */

let y = 10;
var d = 90;
{
  const y = 1000;
  var d = 9000;
  console.log("value if y inside the scope", y); //prints 1000
  console.log("value if d inside the scope", d); //prints 9000
}

console.log("value if y outside the scope", y); //prints 10
console.log("value if d outside the scope", d); //prints 9000

/*
OUTPUT:
value if y inside the scope 1000
value if d inside the scope 9000
value if y outside the scope 10
value if d inside the scope 9000
 */

/*
var we can re declare but let & const we cant declare again in the same scope

 */
// this is possible
var x = 232324
var x = 10000

// this is not possible
//let x =1000 // this will throw us the error SyntaxError: Identifier 'x' has already been declared same with const

/*
TEMPORAL DEAD ZONE
the zone between the value is not assigned to the variable declared with let and const
the value of w is undefined because of context execution of js but we cant use it before line 84 
since before it is under temporal dead zone (TBZ)
In var there is no TBZ
 */

//console.log(w) // ReferenceError: Cannot access 'w' before initialization

//console.log(z) // undefined

const w = 0;

var z =0 
