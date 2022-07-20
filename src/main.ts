/*
dependency inversion principle
explicação:

módulos de auto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações

dependa de abstrações não de implementações

abstrações não devem depender de detalhes, detalhes devem depender de abstrações

classes de baixo nível são classes que executam tarefas (os detalhes)
classes de auto nível são classes que gerenciam as classes de baixo nível

resumo


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
