let modeBtn = document.querySelector("button");
let body = document.querySelector("body");
if(localStorage.getItem("body")==="true"){
    body.classList.add("dark");
}

modeBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  body.classList.contains("dark")
    ? localStorage.setItem("body", true)
    : localStorage.setItem("body", false);
});
