let products = document.querySelector(".products-div");

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
const BASE_URL = "https://api.escuelajs.co/api/v1/products";

form.addEventListener("submit", function () {});

fetch(`${BASE_URL}`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => drawCard(data))
  .catch((err) => console.log(err));

function drawCard(array) {
  array.forEach((item) => {
    products.innerHTML += `
        <div class="product">
            <div class="product-image">
              <img src="${item.category.image}" style="width: 100%" alt="" />
            </div>
            <div class="product-heading">
              <p class="title">${item.title}</p>
              <p class="description">${item.description}</p>
              <span>${item.price}</span>
              <div><button class="deleteBtn" onclick = "deleteProduct(${item.id}")>Delete</button></div>
            </div>
          </div>
        `;
  });
}

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let newProduct = {
//     title: inputs[0].value,
//     description: inputs[1].value,
//     price: inputs[2].value,
//     category: {
//       image: inputs[3].value,
//     },
//   };
//   console.log(newProduct);

//   fetch(`${BASE_URL}`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(newProduct),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       drawCard(data);
//     })
//     .catch((err) => console.log(err));
// });

function deleteProduct(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}

