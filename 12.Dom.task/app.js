// let clickBtn = document.querySelector(".clickme");
// clickBtn.addEventListener("click", function () {
//   this.parentElement.style.backgroundColor = "teal";
//   this.parentElement.style.width = "200px";
//   this.parentElement.style.height = "200px";
//   this.parentElement.style.position = "relative";
//   this.style.position = "absolute";
//   this.style.bottom = "20px";
//   this.style.right = "20px";
// });

// // let elemList = document.querySelector(".list");
// let ul = document.createElement("ul");
// const liArr = ["Ganja", "Baku", "Shamkir", "Yevlakh", "Gadabay"];
// liArr.forEach((item) => {
//   let liElem = document.createElement("li");
//   liElem.addEventListener("click", function () {
//     this.remove();
//   });
//   liElem.style.listStyle = "none";
//   liElem.innerText = item;
//   ul.append(liElem);
// });

// document.querySelector(".cities").append(ul);

let header = document.querySelector(".header");
let logo = document.querySelector(".logo");
let navbar = document.querySelector(".navbar");
let button = document.querySelector(".button");

let logoName = document.createElement("h1");
logo.innerText = "LOGOBAKERY";
logo.style.fontWeight = "bold";
header.append(logoName);

let liElem = ["Services", "Projects", "About"];
let ul = document.createElement("ul");
let li = document.createElement("li");
liElem.forEach((item) => {
  li.innerText = liElem;
  li.style.listStyle = "none";
  ul.append(li);
});

navbar.append(ul);
