let words = document.querySelector(".words");
let keys = document.querySelectorAll(".key");

document.addEventListener("keyup", function (event) {
  keys.forEach((item) => {
    if (event.key == `${item.innerText}`) {
      item.style.backgroundColor = "darkcyan";
      item.style.transform = "scale(1)";
    }
  });
});
document.addEventListener("keydown", function (event) {
  keys.forEach((item) => {
    if (event.key == `${item.innerText}`) {
      item.style.backgroundColor = "yellowgreen";
      item.style.transform = "scale(1.3)";
      words.innerText += event.key;
    }
  });
}); 
document.addEventListener("keydown", function (event) {
if(event.code ==="Backspace"){
    words.innerText = words.innerText.slice(0,words.innerText.length-1)

}
});
