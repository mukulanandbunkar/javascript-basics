const btn = document.querySelector(".throttle_btn");
const normalOutput = document.querySelector(".normal_output");
const throttleOutput = document.querySelector(".throttle_output");

let normalCounter = 0;
let throttleCounter = 0;

const createDebounce = (callback, delay) => {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
};

const debounceCounter = createDebounce(() => {
  throttleOutput.innerHTML = ++throttleCounter;
}, 1000);

btn.addEventListener("click", () => {
  normalOutput.innerHTML = ++normalCounter;
  debounceCounter();
})
