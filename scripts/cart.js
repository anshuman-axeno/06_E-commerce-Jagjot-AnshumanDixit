/*let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsDiv = document.querySelector(".cart-items");
const cartPriceDiv = document.querySelector(".cart-price");

function showCart() {

  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" class="item-img">
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>Size: ${item.size}</p>
          <p>Color: ${item.color}</p>
          <p class="item-price">$${item.price}</p>
        </div>
        <img src="/assets/images/delete.png" class="delete-btn" onclick="removeItem(${index})">
        <div class="quantity-box">
          <button onclick="decreaseQty(${index})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>
      </div>
    `;
  });

  showPrice();
}

function showPrice() {

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  let discount = subtotal * 0.2;
  let deliveryFee = 15;
  let total = subtotal - discount + deliveryFee;

  cartPriceDiv.innerHTML = `
    <h3>Order Summary</h3>
    <p class="price-row">Subtotal <span>$${subtotal}</span></p>
    <p class="price-row">Discount (-20%) <span class="discount-price">-$${discount}</span></p>
    <p class="price-row">Delivery Fee <span>$${deliveryFee}</span></p>
      <h3 class="total-row">Total <span>$${total}</span></h3>
    <input type="text" placeholder="Add promo code" class="promo-input">
    <button class="apply-btn">Apply</button>
    <button class="checkout-btn" onclick="checkout()">Go to Checkout</button>
  `;
}
function checkout() {
  alert("Order completed!");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function increaseQty(index) {
  cart[index].quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
  }
}

showCart();
*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let promoDiscount = 0;

const cartItemsDiv = document.querySelector(".cart-items");
const cartPriceDiv = document.querySelector(".cart-price");

function showCart() {

  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" class="item-img">
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>Size: ${item.size}</p>
          <p>Color: ${item.color}</p>
          <p class="item-price">$${item.price}</p>
        </div>
        <img src="/assets/images/delete.png" class="delete-btn" onclick="removeItem(${index})">
        <div class="quantity-box">
          <button onclick="decreaseQty(${index})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>
      </div>
    `;
  });

  showPrice();
}

function showPrice() {

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  let discount = subtotal * 0.2;
  let promoAmount = subtotal * (promoDiscount / 100);
  let deliveryFee = 15;
  let total = subtotal - discount - promoAmount + deliveryFee;

  cartPriceDiv.innerHTML = `
    <h3>Order Summary</h3>
    <p class="price-row">Subtotal <span>$${subtotal}</span></p>
    <p class="price-row">Discount (-20%) <span class="discount-price">-$${discount}</span></p>
    <p class="price-row">Delivery Fee <span>$${deliveryFee}</span></p>
    <h3 class="total-row">Total <span>$${total}</span></h3>
    <input type="text" id="promo-input" placeholder="Add promo code" class="promo-input">
    <button class="apply-btn" onclick="applyPromo()">Apply</button>
    <button class="checkout-btn" onclick="checkout()">Go to Checkout</button>
  `;
}

function applyPromo() {
  const code = document.getElementById("promo-input").value;

  if (code === "SAVE10") {
    promoDiscount = 10;
    alert("Promo code applied!");
  } else if (code === "SAVE20") {
    promoDiscount = 20;
    alert("Promo code applied!");
  } else {
    alert("Wrong code");
  }

  showPrice();
}

function checkout() {
  alert("Order completed!");
  cart = [];
  promoDiscount = 0;
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function increaseQty(index) {
  cart[index].quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
  }
}

showCart();