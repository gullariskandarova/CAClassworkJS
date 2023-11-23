let addList = document.querySelector(".todo");
let addButton = document.querySelector(".addButton");
let list = document.querySelector(".list");
list.style.listStyle = "none";

addButton.addEventListener("click", function () {
  if (addList.value !== "") {
    let liElem = document.createElement("li");
    let text = document.createElement("span");
    let deleteButton = document.createElement("button");
    text.innerText = addList.value;
    deleteButton.innerText = "Delete";
    liElem.append(text, deleteButton);
    list.append(liElem);
    addList.value = "";
    deleteButton.addEventListener("click", function () {
      this.parentElement.remove();
    });
    liElem.style.backgroundColor = "PINK";
    liElem.style.padding = "10px";
    liElem.style.borderRadius = "8px";
    deleteButton.style.backgroundColor = "RED";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "10px";
    deleteButton.style.borderRadius = "8px";
    text.style.color = "rgb(179, 0, 39)";
    liElem.style.display = "flex";
    list.style.display= "flex";
    list.style.flexDirection= "column";
    list.style.gap= "15px";
    liElem.style.justifyContent = "space-between";

  }
});
