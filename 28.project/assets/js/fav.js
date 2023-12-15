const cards = document.querySelector(".cards");
const BASE_URL = "http://localhost:8000/users";
const fav = JSON.parse(localStorage.getItem("fav"));

function drawCard(arr) {
  arr.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
    <img src="${element.userphoto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.surname}</p>
      <button class="btn btn-danger" onclick = deleteFav()>delete</button>
    </div>
    `;
    cards.append(card);
  });
}

drawCard(fav);
function deleteFav(id) {
  if (confirm("Are you sure?")) {
    let obj = fav.find((item) => item.id === id);
    obj.remove();
  }
}
