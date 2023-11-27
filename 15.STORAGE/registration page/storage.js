let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

let users = JSON.parse(localStorage.getItem("users")) || [];
// let users = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    users.some(
      (item) =>
        item.firstName === allInputs[0].value ||
        item.lastName === allInputs[1].value
    )
  ) {
    window.alert("Bele istifadechi qeydiyyatda var ");
  } else {
    let userObj = {
      id: Date.now(),
      firstName: allInputs[0].value,
      lastName: allInputs[1].value,
      address: allInputs[2].value,
    };
    users.push(userObj);
    allInputs.forEach((item) => {
      item.value = "";
    });
    // console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(JSON.parse(localStorage.getItem("users")));

    window.location = "about.html";
  }
});

// localStorage.clear()
