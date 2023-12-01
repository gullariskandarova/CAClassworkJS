let arr = JSON.parse(localStorage.getItem("arr")) || [];

$(".add").on("click", function () {
  if ($("input").value !== "") {
    let text = document.createElement("p");
    text.innerText = $("input").val();

    arr.push(text.innerText);

    localStorage.setItem("arr", JSON.stringify(arr));
    $(".text").append(text);
    $("input").val("");

    text.addEventListener("click", function () {
      this.remove();
      
    });
  }
});

function forArr(array) {
  array.forEach((item) => {
    let text = document.createElement("p");
    text.innerText = item;
    $(".text").append(text);
    text.addEventListener("click", function () {
      this.remove();
      localStorage.removeItem(this);
    });
  });
}

forArr(arr);
