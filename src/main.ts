/*
index.test.ts => teste de integração

index.spec.ts => teste unitário
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { enterpriseCustomer } from './classes/costomer';

const noDiscount = new NoDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
//const customerIndividual = new individualCustomer('Gustavo', 'Kurek', '13431106960');
const customerEnterprise = new enterpriseCustomer('GK', '1315465487434');
const persistency = new Persistency();
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  customerEnterprise,
);
console.log(order.orderStatus);
shoppingCart.addItem(new Product('caderno', 35));
shoppingCart.addItem(new Product('mala', 350.54));
shoppingCart.addItem(new Product('livro', 89.5));
shoppingCart.addItem(new Product('uniforme', 65));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWitchDiscount());
order.checkout();
console.log(order.orderStatus);
console.log(shoppingCart.items);
