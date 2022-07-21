import { Discount } from './discount';
import { Items } from './interfaces/card-items';
import { ShoppingCartProtocol } from './interfaces/shoppingCart-Protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  constructor(private readonly discount: Discount) {}
  private readonly _items: Items[] = [];

  get items(): Readonly<Items[]> {
    return this._items;
  }

  addItem(item: Items): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((acc, items) => acc + items.price, 0).toFixed(2);
  }

  totalWitchDiscount(): number {
    return this.discount.calculate(this.total());
  }

  clear(): void {
    this._items.length = 0;
    console.log('carrinho foi limpo');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
