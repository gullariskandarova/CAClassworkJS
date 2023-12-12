const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("newUser")) ?? [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = userData.some((item) => {
    return item.email === email.value || item.userName === userName.value;
  });

  if (!bool) {
    let newUser = {
      userName: userName.value,
      email: email.value,
      password: password.value,
    };
    //   console.log(newUser);
    userData.push(newUser);
    localStorage.setItem("newUser", JSON.stringify(userData));
    userName.value = "";
    email.value = "";
    password.value = "";
    window.location = "login.html";
  } else {
    window.alert("Bele istifadeci qeydiyyat kecib");
  }
});
