let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
console.log(allInputs);

let data = JSON.parse(localStorage.getItem("users")) || [];


form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let info = {
    id:Date.now(),
    firstName: allInputs[0].value,
    lastName: allInputs[1].value,
    address: allInputs[2].value
  }

  data.push(info)
  localStorage.setItem("users", JSON.stringify(info))
  allInputs[0].value = "";
  allInputs[1].value = "";
  allInputs[2].value = ""

});