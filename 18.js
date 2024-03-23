class Student {

  //constructor
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  // setVal(name, rollNo) {
  //   this.name = name;
  //   this.rollNo = rollNo;
  // }



  // getter function

  getVal() {
    return `${this.name} : ${this.rollNo}`;
  }
}




const s1 = new Student("mukul", 1234);
// s1.setVal("mukul", 1234);
console.log(s1.getVal());


const s2 = new Student('akash', 234343545)

console.log(s2.getVal())
