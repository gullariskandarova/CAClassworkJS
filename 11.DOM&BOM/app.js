//================ TASK 1
// let count = 1;
// let countInterval = setInterval(() => {
//   console.log(count++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(countInterval);
// }, 4000);

//================TASK 2

// let text = document.querySelector(".text");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   text.style.fontSize = "48px";
//   text.style.color = "red";
//   text.innerText = "I am hacker";
// });

// let all = document.querySelectorAll(".variant");

// all.forEach((item) => {
//   console.log(item.innerText);
// });

//================ Task 3
let dev = document.querySelector(".dev");
let str = "developer";

let i = 1;
// let strInterval = setInterval(() => {
//   if (i <= str.length) {
//     str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
//     console.log(str);
//     i++;
//   } else {
//     clearInterval(strInterval);
//   }
// }, 1000);
let strInterval = setInterval(() => {
  if (i <= str.length) {
    str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
    dev.innerText = str;
    i++;
  } else {
    clearInterval(strInterval);
  }
}, 1000);

//============TASK 5

let colors = ["red", "green", "black", "blue", "yellow"];

let colorBtn = document.querySelector(".colorbtn");

colorBtn.addEventListener("click", function() {
  console.log(colors[Math.floor(Math.random() * colors.length)]);
  document.body.style.backgroundColor = colors[Math.floor((Math.random() * colors.length))];
});
