//calback function in js

//the function in js is single threaded and syncronous in nature
//but callback function provide us the libility of asynchrounousity

setTimeout(() => {
    console.log('this is print after 5 sec');
}, 5000)


const x = (y) => {
    console.log('x');
    y();
}

x(() => {
    console.log('y');
})


// setTimeout(() => {
//     console.log('this is timInterval')
//   }, 5000)
  
  function v () {
    console.log('this is my function')
  }
  
  v();

// output
// x
// y
// this is print after 5 sec