function setBasket(array) {
  localStorage.setItem("basket", JSON.stringify(array));
}
function getBasket() {
  return JSON.parse(localStorage.getItem("basket"));
}

let basket = getBasket();

basket.forEach((item) => {
  console.log(item);
});
