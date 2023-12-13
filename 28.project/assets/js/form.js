const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const BASE_URL = "http://localhost:8000/users";
let editStatus = false;
let editId;
const data = JSON.parse(localStorage.getItem("data")) ?? [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = new Date();
  let obj = {
    name: allInputs[0].value,
    surname: allInputs[1].value,
    email: allInputs[2].value,
    date: date.toLocaleString(),
    userphoto: `./assets/img/${allInputs[3].value.split("\\")[2]}`,
  };
  if (!editStatus){
    if (
        allInputs[0].value &&
        allInputs[1].value &&
        allInputs[2].value &&
        allInputs[3].value
      ){
        
      }
  }
   data.push(obj);
  localStorage.setItem("data", JSON.stringify(obj));
});
