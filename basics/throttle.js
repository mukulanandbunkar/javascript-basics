const btn = document.querySelector(".throttle_btn");
const normalOutput = document.querySelector(".normal_output");
const throttleOutput = document.querySelector(".throttle_output");

let normalCounter = 0;
let throttleCounter = 0;

const createThrottle = (callback, delay) => {
  let start = 0;
  return () => {
    let now = new Date().getTime();
    if (now - start < delay) return;
    start = now;
    return callback();
  };
};

const throttlecounter = createThrottle(() => {
  throttleOutput.innerHTML = ++throttleCounter;
}, 1000);

btn.addEventListener("click", () => {
  normalOutput.innerHTML = ++normalCounter;
  throttlecounter();
});
