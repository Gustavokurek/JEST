import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
export class Order {
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}
  private _orderStatus: OrderStatus = 'open';

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      return console.log('seu carrinho está vazio');
    }
    this._orderStatus = 'close';
    this.messaging.sendMessage(
      `seu pedido de valor ${this.cart.total()} foi confirmado`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
