let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let submitBtn = document.querySelector("#submitBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userData = JSON.parse(localStorage.getItem("newUser"));
  let bool = userData.some((item) => {
    return (
      item.email === email.value &&
      item.password === password.value
    );
  });

  if (bool) {
    window.location = "home.html";
  } else {
    window.alert("Bele istifadeci qeydiyyat yoxdur");
  }
});
