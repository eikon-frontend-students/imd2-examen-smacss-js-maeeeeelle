// var toggleBox = document.querySelector(".toggle-color");
// let isBlue = false;

// toggleBox.addEventListener("click", function () {
//   if (isBlue) {
//     toggleBox.style.backgroundColor = "blue";
//   } else {
//     toggleBox.style.backgroundColor = "yellow";
//   }
//   isRed = !isRed;
// });

// var products = document.querySelectorAll(".product")
// var description = document.querySelectorAll(".description")

// var header = document.querySelector(".l-header")

// header.addEventListener("click", function)

var header = document.querySelector(".l-header");

header.addEventListener("click", () => {
  if (header.style.backgroundColor === "dar-blue") {
    header.style.backgroundColor = "yellow";
    header.style.color = "dark-blue";
  } else {
    header.style.backgroundColor = "dark-blue";
    header.style.color = "white";
  }
});

var products = document.querySelectorAll(".product");

products.forEach(function (product) {
  product.addEventListener("click", function () {
    if (product.style.backgroundColor("pink")) {
      product.style.backgroundColor = "yellow";
      product.style.color = "blue";
    } else {
      product.style.backgroundColor = "blue";
      product.style.color = "white";
    }
  });
});
