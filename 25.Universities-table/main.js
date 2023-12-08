const BASE_URL = "http://universities.hipolabs.com/search?country=Azerbaijan";
const search = document.querySelector(".search");
const spinner = document.querySelector(".spinner");
tBody = document.querySelector("tbody");
async function getData() {
  try {
    spinner.classList.add("show");
    let respons = await axios(`${BASE_URL}`);
    console.log(respons.data);
    drawTable(respons.data);
  } catch (error) {
    console.log(error.message);
  } finally {
    spinner.classList.remove("show");
  }
}
getData();

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains[0]}</td>
    <td><a href="#">${element.web_pages[0]}</a></td>
      `;
    tBody.append(trElem);
  });
}

search.addEventListener("input", async function (e) {
  try {
    spinner.classList.add("show");
    let res = await axios(`${BASE_URL}&name=${e.target.value}`);
    drawTable(res.data);
  } catch (error) {
    console.log(error.message);
  } finally {
    spinner.classList.remove("show");
  }
});
