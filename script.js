// importing module

import func from './shoppingCart.js';

console.log(func());

console.log('Importing Module');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

// console.log(cart.find(el => el.quantity >= 2));

import 'core-js/stable';
