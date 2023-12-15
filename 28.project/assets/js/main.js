const tbody = document.querySelector("tbody");
const BASE_URL = "http://localhost:8000/users";
async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}`);
    console.log(response.data);
    drawTable(response.data);
  } catch (error) {
    console.log(error.message);
  }
}
getAllData();
function drawTable(data) {
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML = `
                  <tr>
                      <td>${element.id}</td>
                      <td><img src="${element.userphoto}" /></td>
                      <td>${element.name}</td>
                      <td>${element.surname}</td>
                      <td>${element.email}</td>
                      <td>${element.date}</td>
                      <td><button class="btn btn-success">Edit</button> <button class="btn btn-danger" onclick = deleteFunc(${element.id})>Delete</button> <button class="btn btn-primary" onclick=addFav(${element.id})>Add Fav</button></td>
                  </tr>
        `;
    tbody.append(trElem);
  });
}

async function deleteFunc(id) {
  try {
    if (confirm("Are you sure?")) await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.log(error.message);
  }
}

const fav = JSON.parse(localStorage.getItem("fav")) ?? [];
async function addFav(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  console.log(res.data);
  let obj = fav.find((item) => item.id === id);
  if (!obj) {
    fav.push(res.data);
    localStorage.setItem("fav", JSON.stringify(fav));
  } else {
    alert("varr ");
  }
}


