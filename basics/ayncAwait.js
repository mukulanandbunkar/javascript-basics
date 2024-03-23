const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 5000);
});

function OnDragDiv(event) {
    console.log(event)
    event.preventDefault()
    event.dataTransfer()
}

const newDiv = document.createElement('div');
newDiv.className = 'new-div'
newDiv.id = 'new-div-id'
newDiv.innerText = 'this is my new div append manually by js'

const date = new Date();
console.log(date.getUTCHours())

const targetText = document.getElementById("color");
const body = document.querySelector(".wrapper");
body.appendChild(newDiv)
console.log(body, "body");
console.log(targetText, "--");
targetText.addEventListener("change", (event) => {
  console.log(event.target.value, body.classList);
  if (body.classList.contains("wrapper1")) {
    body.classList.remove("wrapper1");
  } else {
    body.classList.add("wrapper1");
  }
})(async function () {
  const v = await b;
  console.log(v);
})();
