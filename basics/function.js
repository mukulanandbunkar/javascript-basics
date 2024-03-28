/*
what is function decalration / function defination/ function statement
 */

function sum(a, b) {
  return a + b;
}

/*
What is function expression
when we store a function in a varible it is called function expression
 */

const square = function (num) {
  return num * num;
};

/*
anonymous function is a function which has no name it will assign to a varible or use as a callback\
EX:
function (num) {
  return num * num;
}
 */

/**
 First class function / Higher order function
 a function which use another function as a argument so the parent one is first class function
 */

const displaySquare = (fn) => console.log(fn);

displaySquare(square(5));

/**
 IIFE - immediaet invoke function expression
 we can immidiately call it via (function def)(...args)
 we can use it with fat arrow also but without and decalration
1. ( namePrint = (name) =>{
    console.log(name + 'anand');
    })('mukul')

2. ((name) =>{
    console.log(name + 'anand');
    })('mukul')

with anonmous function  and without anonymous
1. ( function(name){
    console.log(name + 'anand');
    })('mukul')
2. ( function xyz (name){
    console.log(name + 'anand');
    })('mukul')
 */

(namePrint = (name) => {
  console.log(name + "anand");
})("mukul");

/**
 O/p based question
 what is the output of following function
 */

(function (x) {
  return (function (y) {
    console.log(x);
  })(100);
})(10);

// ANS : 10

/*
Question 
print the count of 0 to 4 using for loop at a interval of 1 sec
 */

/**
 * below function will print 1 to 5 only since let have local scope and it will chnage with scope
 */

const print0to4 = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
};

//print0to4();

/**
 * below function will print 5 only since var have global scope and it will chnage to 5 globally
 */

const print5only = () => {
    for (var i = 0; i < 5; i++) {
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    }
  };

  //print5only();


  /*
  *Function hoisting
  in the below output will be undefined since scope changes for 
  var and inside function scope the value of var before decalrtion is undefined
  */

  var u =21 
   function getU () {
    console.log(u);
    var u =1000
   }

   getU()

/**
 * argument
 * args as we see below is works with normal function keyword and also with fat arrow function
 * const  fn  = (...args) =>{
 console.log(args); // will give the array of params passed
}
* const  fn  = (a,b,...args) =>{
 console.log(a,b,args); // will asiign value to a & b as for param and second param &b give  the array of otheres as we see below
}
 */

const  fn  = (a,b,...args) =>{
 console.log(a,b,args);
 /**
  * Output
 1 2 [
  3, 4, 5, 6, 7,
  5, 4, 3, 3, 4
]
  */
}

fn(1,2,3,4,5,6,7,5,4,3,3,4)


/* 
Difference between fat arrow & normal function 
1. syntax
2. if retiurn in single line there is np need to write return keyword in fat arrow function
3.this keypword behave differently in  noraml funtion & fat arrow function
4. we cant use arguments in fat arrow example below
*/

function r () {
    console.log(arguments); // print argument
}

r();

const u = () => {
    console.log(arguments); // throw error
}

// u();
