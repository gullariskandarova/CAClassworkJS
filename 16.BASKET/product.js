import { products } from "./data.js";

let card = document.querySelector(".card");
let cards = document.querySelector(".cards");
let btnAdd = document.querySelector(".add-btn");

drowCard(products);
function drowCard(data) {
  data.forEach((item) => {
    cards.innerHTML += `
    <div class="card" style = "width: 30%; border: 1px solid; padding: 5px " >
    <img style= "width: 100%" src="${item.thumbnail}" alt="" />
        <h4>${item.title}</h4>
        <h4>${item.price}</h4>
        <p>${item.description.slice(0, 100)}...</p>
        <div class="btnIcon" style="display: flex; justify-content: space-between; color: red ">
            <button class="btn-add" style = "padding: 10px 20px; border-radius: 25px; border: none; background-color: aquamarine" onclick = "addBasket()">Add to basket</button>
            <i class="fa-regular fa-heart" onclick = "iconFunc()"></i>
            </div>
    </div>
        `;
  });
}


let basket = document.querySelector(".basket");

cards.style.display = "flex";
cards.style.flexWrap = "wrap";
cards.style.padding = "3rem 5rem";
cards.style.gap = "30px";
