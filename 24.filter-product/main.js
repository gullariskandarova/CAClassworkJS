const BASE_URL = `https://fakestoreapi.com/products`;
const cards = document.querySelector(".cards");
const electronics = document.querySelector(".electronics");
const jewelery = document.querySelector(".jewelery");
const men = document.querySelector(".men");
const women = document.querySelector(".women");

async function getAllData(endPoint) {
  try {
    let response = await axios(`${BASE_URL}/${endPoint}`);
    console.log(response.data);
    drawCard(response.data);
  } catch (error) {
    console.log(error.message);
  }
}
// getAllData("jewelery");

function drawCard(array) {
  cards.innerHTML = "";
  array.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
       <a href="./detail.html?id=${element.id}">
       <img src="${element.image}" alt="" />
       <div class="text">
       <p>${element.title}</p>
       <p>${element.price}$</p>
       </div>
       </a>
        
    `;
    cards.append(card);
  });
}

electronics.addEventListener("click", function () {
  getAllData("/category/electronics");
});
jewelery.addEventListener("click", function () {
  getAllData("/category/jewelery");
});
men.addEventListener("click", function () {
  getAllData("/category/men's clothing");
});
women.addEventListener("click", function () {
  getAllData("/category/women's clothing");
});

function detailPage(){

}










getAllData("");

