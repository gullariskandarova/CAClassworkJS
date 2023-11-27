let users = JSON.parse(localStorage.getItem("users")) || [];
let tBody = document.querySelector("tBody");
users.forEach((item) => {
  let trElem = document.createElement("tr");
  trElem.innerHTML = `
    <td>${item.id}</td>
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.address}</td>
  `;
  tBody.append(trElem);
});
