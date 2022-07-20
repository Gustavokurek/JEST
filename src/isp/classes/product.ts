import { Items } from './interfaces/card-items';

export class Product implements Items {
  constructor(public name: string, public price: number) {}
}
