# Shop.co - E-commerce Website

A front-end e-commerce website built with HTML, SCSS, and JavaScript. The project includes a home page, a product details page, and a cart page with basic order management.

## Pages

- index.html - Home page with hero section, new arrivals, top selling products, browse by dress style, customer reviews, and newsletter signup
- product.html - Product details page with color and size selection, quantity control, and add to cart functionality
- cart.html - Cart page showing added items, order summary, promo code input, and checkout

## Features

- Responsive layout built with SCSS (partials organized by layout and pages)
- Product data stored in a JavaScript file and rendered dynamically
- Add to cart functionality using localStorage
- Cart page with quantity update, item removal, and live price calculation
- Promo code system supporting two codes (SAVE10 and SAVE20), with invalid code handling
- Checkout button that completes the order and clears the cart

## Project Structure

├── index.html
├── product.html
├── cart.html
├── css/
│   └── main.css
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── layout/
│   │   ├── _navbar.scss
│   │   ├── _arrivals.scss
│   │   ├── _selling.scss
│   │   ├── _browse.scss
│   │   ├── _reviews.scss
│   │   └── _footer.scss
│   ├── pages/
│   │   ├── _product.scss
│   │   └── _cart.scss
│   └── main.scss
├── scripts/
│   ├── main.js
│   ├── products.js
│   ├── product.js
│   └── cart.js
└── assets/
    └── images/

## How to Run

1. Clone the repository
2. Open the project folder in a code editor
3. Run index.html using a local server, such as the Live Server extension in VS Code

## Technologies Used

- HTML5
- SCSS
- JavaScript (vanilla)
- localStorage for cart persistence

## Authors

Jagjot Singh and Anshuman Dixit
