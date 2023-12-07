const BASE_URL = " http://localhost:8000/blog";

const cards = document.querySelector(".cards");

async function getData() {
  try {
    let response = await axios(`${BASE_URL}`);
    console.log(response.data);
    drawCard(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

function drawCard(arr) {
  arr.forEach((item) => {
    let card = document.createElement("div");
    card.innerHTML += `
        <div class="card">
        <h1>${item.title}</h1>
        <span class="content">${item.body}</span><a href="#">Read More</a> 
        <p>${item.author}</p>
        <div class="buttons">
            <button class="delete" onclick = deleteCard(${item.id},this)>Delete</button>
            <button class="edit"><a href="./blog-form.html">Edit</a></button>
        </div>
        </div> 
    `;
    cards.append(card);
  });
}
getData();

async function deleteCard(id, btn) {
  btn.closest(".card").remove();
  await axios.delete(`${BASE_URL}/${id}`)
}
