// importing module

// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// addToCart('bread', 5);

// import * as shoppingCart from './shoppingCart.js';

import add from './shoppingCart.js';

// shoppingCart.addToCart('bread', 5);
//

console.log('Importing Module');

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
