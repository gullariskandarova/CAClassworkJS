let body = document.querySelector("body");
let form = document.createElement("form");
let email = document.createElement("input");
let password = document.createElement("input");
let userName = document.createElement("input");
let confirmPass = document.createElement("input");
let loginBtn = document.createElement("button");
let forgotPassword = document.createElement("a");
let heading = document.createElement("h1");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.justifyContent = "center";
body.style.backgroundImage = "linear-gradient(red 10%, 30%, blue 90%)";
loginBtn.innerText = "Sign up";
heading.innerText = "Sign up";
heading.style.textAlign = "center";
email.style.display = "block";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.gap = "10px";
form.style.width = "20rem";
form.style.border = "none";
form.style.padding = "20px";
form.style.backgroundColor = "white";
form.style.borderRadius = "8px";
email.style.borderRadius = "8px";
email.style.padding = "7px";
email.style.borderRadius = "8px";
email.style.border = "1px solid";
email.style.outline = "none";
email.type = "email";
email.setAttribute("placeholder", "Email Address");
password.setAttribute("placeholder", "Password");
password.style.borderRadius = "8px";
password.type = "password"
confirmPass.type = "password"
password.style.padding = "7px";
password.style.borderRadius = "8px";
password.style.border = "1px solid";
password.style.outline = "none";
loginBtn.style.borderRadius = "8px";
loginBtn.style.padding = "7px";
loginBtn.style.borderRadius = "8px";
loginBtn.style.border = "1px solid";
loginBtn.style.outline = "none";
loginBtn.style.backgroundColor = "blue";
loginBtn.style.color = "white";
userName.style.borderRadius = "8px";
userName.style.padding = "7px";
userName.style.borderRadius = "8px";
userName.style.border = "1px solid";
userName.style.outline = "none";
userName.setAttribute("placeholder", "Name");
confirmPass.style.borderRadius = "8px";
confirmPass.style.padding = "7px";
confirmPass.style.borderRadius = "8px";
confirmPass.style.border = "1px solid";
confirmPass.style.outline = "none";
confirmPass.setAttribute("placeholder", "Confirm password");

form.append(heading, userName, email, password, confirmPass, loginBtn);
body.append(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  window.location.href =
    "http://127.0.0.1:5501/18.RegistrationForm/login.html?";
});
