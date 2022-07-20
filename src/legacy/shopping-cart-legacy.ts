type Items = { name: string; price: number };
type OrderStatus = 'open' | 'close';

export class ShoppingCartLegacy {
  private readonly _items: Items[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<Items[]> {
    return this._items;
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  addItem(item: Items): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.slice(index, 1);
  }

  total(): number {
    return +this._items.reduce((acc, items) => acc + items.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      return console.log('seu carrinho está vazio');
    }
    this._orderStatus = 'close';
    this.sendMessage(`seu pedido de valor ${this.total()} foi confirmado`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('pedido concluído');
  }

  clear(): void {
    this._items.length = 0;
    console.log('carrinho foi limpo');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
console.log(shoppingCart.orderStatus);
shoppingCart.addItem({ name: 'caderno', price: 35.5 });
shoppingCart.addItem({ name: 'mala', price: 350.545 });
shoppingCart.addItem({ name: 'livro', price: 89.5 });
shoppingCart.addItem({ name: 'uniforme', price: 65.5 });

console.log(shoppingCart.items);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
