let selectedColor = "";
let selectedSize = "";

const params= new URLSearchParams(window.location.search);
const productId=Number(params.get("id"));
console.log(productId);

const product=products.find(item=> item.id===productId);
console.log(product);

document.getElementById("product-name").textContent = product.name;

document.getElementById("product-image").src = product.image;

document.getElementById("product-price").textContent =
  `$${product.price}`;

if (product.oldPrice) {
  document.getElementById("product-old-price").textContent =
    `$${product.oldPrice}`;
}

if (product.discount) {
  document.getElementById("product-discount").textContent =
    `-${product.discount}%`;
}

document.getElementById("product-description").textContent =
  product.description;

document.querySelectorAll(".color-option").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".color-option")
      .forEach(btn => btn.classList.remove("selected"));

    button.classList.add("selected");
    selectedColor = button.dataset.color;
  });
});

//sizeFUncgion

document.querySelectorAll(".size-option").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".size-option")
      .forEach(btn => btn.classList.remove("selected"));

    button.classList.add("selected");
    selectedSize = button.dataset.size;
  });
});

let quantity = 1;

const quantityDisplay = document.getElementById("quantity");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

increaseButton.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

decreaseButton.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

const addCartButton = document.getElementById("add-cart-btn");

addCartButton.addEventListener("click", () => {

  if (selectedColor === "" || selectedSize === "") {
    alert("Please select a color and size.");
    return;
  }

  const cartItem = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    color: selectedColor,
    size: selectedSize,
    quantity: quantity
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
});