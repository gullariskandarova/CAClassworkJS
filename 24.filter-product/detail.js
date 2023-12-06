const id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector(".cards");
const BASE_URL = "https://fakestoreapi.com/products";
// console.log(id);
async function detailPage() {
  try {
    let response = await axios(`${BASE_URL}/${id}`);
    console.log(response.data);
    drawCard(response.data);
  } catch (error) {
    console.log(error);
  }
}

function drawCard(obj) {
//   cards.innerHTML = "";
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        
         <img src="${obj.image}" alt="" />
         <div class="text">
         <p>${obj.description}</p>
         <p>${obj.price}$</p>
         </div>
         
          
      `;
    cards.append(card);
}
detailPage("");
