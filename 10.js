//Concept of this keyword

// In JavaScript, the `this` keyword is a special identifier that is automatically defined in the scope of every function.
// Its value is determined by how a function is called, and it allows access to the object it's called on or refers to the global object (usually `window` in a browser environment).

// Global Context:
// In the global context (outside of any function), `this` refers to the global object. In a browser environment, it is often `window`.
console.log(this); // Output: window (in a browser environment)

// Function Context:
// Inside a regular function (not an arrow function), the value of `this` depends on how the function is invoked.
// If the function is called as a method of an object, `this` refers to that object.
const myObject = {
  method: function () {
    console.log(this);
  }
};

myObject.method(); // Output: myObject

// Constructor Functions:
// When a function is used as a constructor with the `new` keyword, `this` refers to the newly created object.
function Person(name, age, marks) {
  this.name = name;
  this.age = age;
  // this.marks =10
}
 const marks = {
  marks : 10

}


const john = new Person("mukul",10,30);
console.log(john,  Person, "Person"); // Output: John

// Event Handlers:
// In the context of event handlers, such as those used in DOM manipulation, `this` often refers to the DOM element that triggered the event.
// const button = document.getElementById('myButton');
// button.addEventListener('click', function () {
//   console.log(this); // Output: button
// });

// Arrow Functions:
// Arrow functions behave differently when it comes to `this`.
// They inherit the `this` value from their containing scope (lexical scoping), and they do not have their own `this` value.
const myFunction = () => {
  console.log(this);
};

myFunction(); // Output: window (or global object)

// Method Shorthand in Objects:
// When using method shorthand in object literals, `this` refers to the object itself.
const myObject2 = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

myObject2.greet(); // Output: Hello, Alice!
