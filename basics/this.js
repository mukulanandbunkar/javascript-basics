// Using call, apply, and bind to change the context of 'this'

const detail = {
  name: "mukul",
  surname: "anand",
  getFullName: function (city, state) {
    console.log(`${this.name} ${this.surname}, ${city}, ${state}`);
  },
};

detail.getFullName("jabalpur", "MP");

const detail1 = {
  name: "nidhi",
  surname: "singh",
};

// Using call to change the context to detail1
detail.getFullName.call(detail1, "Balaghat", "MP");

// Using      to change the context to detail1
detail.getFullName.apply(detail1, ["Balaghat", "MP"]);

// Using bind to create a new function with the context changed to detail1
detail.getFullName.bind(detail1, "Balaghat", "MP")();

// 'this' in global scope
console.log(this, "This will print window since its in the global scope");

// 'this' in a normal function (non-strict mode)
function thisWithNonStrict() {
  console.log(
    this,
    "This will print window since undefined is replaced by window in non-strict mode"
  );
}
thisWithNonStrict();

// 'this' in a function under strict mode
function thisWithStrict() {
  "use strict";
  console.log(this, "This will print undefined since its in strict mode");
}
thisWithStrict();

// 'this' inside a fat arrow function
const thisInFatArrow = () => {
  "use strict";
  console.log(this, "This inside fat arrow");
};
thisInFatArrow(); // This will print window

// 'this' inside an object

// Object with a normal function
const Obj = {
  name: "mukul",
  surname: "anand",
  printName: function () {
    console.log(this, "This inside the object function");
  },
};
Obj.printName(); // Prints the whole object

// Object with a fat arrow function
// Fat arrow functions don't have their own 'this'; they take the value of the enclosing lexical context
const ObjWithFatArrow = {
  name: "mukul",
  surname: "anand",
  printName: () => {
    console.log(this, "This inside the object function");
  },
};
ObjWithFatArrow.printName();
// Will print window since it takes the enclosing lexical context

const ObjWithFatArrow1 = {
  name: "mukul",
  surname: "anand",
  printName: function () {
    return () => {
      console.log(this, "This inside the object function");
    };
  },
};
ObjWithFatArrow1.printName()();
// This will log ObjWithFatArrow1 since the enclosing lexical scope of the fat arrow function is the object
