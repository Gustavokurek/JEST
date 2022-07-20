import { OrderStatus } from './interfaces/order-status';
import { Customer } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shoppingCart-Protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
export class Order {
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: Customer,
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
      `seu pedido de valor ${this.cart.totalWitchDiscount()} foi confirmado`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `pedido de ${this.customer.Name}, CPF/CNPJ: ${this.customer.IDN}`,
    );
  }
}
