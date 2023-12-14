const form = document.querySelector("form");
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const word = document.querySelector("input");
const def = document.querySelector(".def");

async function getWord(enter) {
  try {
    let res = await axios(`${BASE_URL}/${enter}`);
    console.log(res.data);
    drawDictionary(res.data);
  } catch (error) {
    console.log(error.message);
  }
}

function drawDictionary(data) {
  def.innerHTML = "";
  let definition = document.createElement("p");
  definition.className = "definition";
  definition.innerHTML += `  <div class="word">
    <h3>${data[0].word}</h3>
    <i class="fa-solid fa-volume-high" onclick = audioPlay(this)>
    <audio src="${data[0]?.phonetics[0]?.audio}"></audio>
    </i>
  </div>
  <p>${data[0].meanings[0].definitions[0].definition}</p>
  `;
  def.append(definition);
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  getWord(word.value);
});

function audioPlay(icon) {
  console.log(icon);
  icon.querySelector("audio").play();
}
