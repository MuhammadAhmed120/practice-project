var addCart = document.querySelectorAll(".add")[0];
var countCart = document.querySelectorAll(".cart-count")[0];
var count = 0;
var countArr = [];

window.onload = function() {
  getFromLS();
};

function addToCart() {
  count++;
  countCart.innerHTML = count;
  countArr.push(count);
  saveOnLS();
}

function saveOnLS() {
  localStorage.setItem("cart-item", JSON.stringify(countArr));
}

function getFromLS() {
  var itemCount = localStorage.getItem("cart-item");
  if (itemCount) {
    countArr = JSON.parse(itemCount);
    count = countArr.length;
    countCart.innerHTML = count;
  }
}