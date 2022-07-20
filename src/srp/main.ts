import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
console.log(order.orderStatus);
shoppingCart.addItem(new Product('caderno', 35));
shoppingCart.addItem(new Product('mala', 350.54));
shoppingCart.addItem(new Product('livro', 89.5));
shoppingCart.addItem(new Product('uniforme', 65));

console.log(shoppingCart.items);
order.checkout();
console.log(order.orderStatus);
console.log(shoppingCart.items);
