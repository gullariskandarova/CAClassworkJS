const BASE_URL = "https://restcountries.com/v2/all";
const cards = document.querySelector(".cards");
const search = document.querySelector(".search-input");
const select = document.querySelector("select");
const darkModeBtn = document.querySelector(".icon");
const body = document.querySelector("body");
if (JSON.parse(localStorage.getItem("mode") === "true")) {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}
async function getAllData() {
  try {
    let res = await axios(`${BASE_URL}`);
    console.log(res.data);
    drawCard(res.data);
  } catch (error) {
    console.log(error.message);
  }
}
getAllData();
function drawCard(array) {
  cards.innerHTML = "";
  array.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
    <a href="./detail.html">
    <img src="${element.flag}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">
     ${element.population}</p>
      <p class="card-text">
      ${element.region}</p>
      <p class="card-text">
      ${element.capital}</p>
    </a>
    `;
    cards.append(card);
  });
}

search.addEventListener("input", async function (e) {
  try {
    let res = await axios(`${BASE_URL}`);
    let filtered = res.data.filter((item) =>
      item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    drawCard(filtered);
    console.log(filtered);
  } catch (error) {
    console.log(error.message);
  }
});

select.addEventListener("change", async function (e) {
  try {
    let res = await axios(
      `https://restcountries.com/v2/region/${select.value}`
    );

    drawCard(res.data);
  } catch (error) {}
});

darkModeBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", true);
  } else {
    localStorage.setItem("mode", false);
  }
});
