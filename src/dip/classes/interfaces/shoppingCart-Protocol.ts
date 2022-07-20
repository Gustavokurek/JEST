import { Items } from './card-items';

export interface ShoppingCartProtocol {
  get items(): Readonly<Items[]>;

  addItem(item: Items): void;

  removeItem(index: number): void;

  total(): number;

  totalWitchDiscount(): number;

  clear(): void;

  isEmpty(): boolean;
}
