const cards = document.querySelector(".cards");

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
      <a href="#" class="btn btn-danger">delete</a>
    </div>
    `;
    cards.append(card);
  });
}

drawCard(fav);
