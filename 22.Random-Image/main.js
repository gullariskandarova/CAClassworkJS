const BASE_URL = "https://dog.ceo/api/breeds/image/random";
let random = document.querySelector(".random");

let image = document.createElement("img");
image.src = "https://images.dog.ceo/breeds/malinois/n02105162_5307.jpg";
random.append(image);

setInterval(() => {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image.src = data?.message;
    })
    .catch((err) => console.log(err));
}, 2000);
