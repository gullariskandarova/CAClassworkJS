let startBtn = document.querySelector(".start");
let result = document.querySelector(".result");
let stopBtn = document.querySelector(".stop");
let incrementby = document.querySelector(".incrementby");
let decrementby = document.querySelector(".decrementby");
let reset = document.querySelector(".reset");
let incrementValue = document.querySelector(".incrementValue");
let decrementValue = document.querySelector(".decrementValue");
let incrementBtn = document.querySelector(".incrementBtn");
let decrementBtn = document.querySelector(".decrementBtn");
startBtn.style.backgroundColor = "green";
startBtn.style.color = "white";
startBtn.style.border = "none";
startBtn.style.padding = "7px 20px";
stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";
stopBtn.style.border = "none";
stopBtn.style.padding = "7px 20px";
incrementby.style.backgroundColor = "teal";
decrementby.style.backgroundColor = "teal";
incrementby.style.border = "none";
decrementby.style.border = "none";
incrementby.style.padding = "7px 20px";
decrementby.style.padding = "7px 20px";
incrementby.style.color = "white";
decrementby.style.color = "white";
reset.style.backgroundColor = "red";
reset.style.color = "white";
reset.style.border = "none";
reset.style.padding = "10px 20px";
incrementValue.vstyle.borderColor = "red";
decrementValue;
let count = 0;
let countInterval;
startBtn.addEventListener("click", function () {
  this.setAttribute("disabled", true);
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  (removeAttribute = "disabled"), null;
  clearInterval(countInterval);
});

incrementby.addEventListener("click", function () {
  result.innerText = count++;
});
decrementby.addEventListener("click", function () {
  result.innerText = count--;
});
reset.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);
  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});

incrementBtn.addEventListener("click", function () {
  count += +incrementValue.value;
  result.innerText = count;
});

decrementBtn.addEventListener("click", function () {
  count -= +decrementValue.value;
  result.innerText = count;
});
