let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".text");
let users = JSON.parse(localStorage.getItem("users")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = users.some(
    (item) =>
      item.firstName === allInputs[0].value ||
      item.lastName === allInputs[1].value
  );
  if (!bool) {
    let userObj = {
      firstName: allInputs[0].value,
      lastName: allInputs[1].value,
      address: allInputs[2].value,
      id: Date.now(),
    };
    users.push(userObj);

    localStorage.setItem("users", JSON.stringify(users));
  } else {
    window.alert("username or email already used");
  }

  allInputs.forEach((item) => {
    item.value = "";
  });

  window.location = "about.html";
});
