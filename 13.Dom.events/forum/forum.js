let email = document.querySelector(".email");
let username = document.querySelector(".username");
let form = document.querySelector(".form");
let submit = document.querySelector(".submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user = {
    email: email.value,
    username: username.value,
  };
  console.log(user);
});
