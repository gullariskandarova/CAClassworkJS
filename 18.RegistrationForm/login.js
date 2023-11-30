let body = document.querySelector("body");
let form = document.createElement("form");
let email = document.createElement("input");
let password = document.createElement("input");
let loginBtn = document.createElement("button");
let forgotPassword = document.createElement("a");
let heading = document.createElement("h1");

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.justifyContent = "center";
body.style.backgroundImage = "linear-gradient(red 10%, 30%, blue 90%)";
loginBtn.innerText = "Login";
heading.innerText = "Login Form";
heading.style.textAlign = "center";
email.style.display = "block";
email.style.marginBottom = "10px";
loginBtn.style.marginTop = "10px";
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
email.setAttribute("placeholder", "Email Address");
password.setAttribute("placeholder", "Password");
password.style.borderRadius = "8px";
password.type = "password";
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
form.style.boxShadow = "1px 1px 1px";
form.append(heading, email, password, loginBtn);
body.append(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = JSON.parse(localStorage.getItem("newUser"));
  user.forEach((item) => {
    if (item.email === email.value && item.password === password.value) {
      window.location = "home.html";
    } else {
      console.log("yoxdu");
    }
  });
});
