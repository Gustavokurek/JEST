import { Discount } from './discount';
import { Items } from './interfaces/card-items';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const { discountMock } = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  const discountMock = new DiscountMock();
  return { discountMock };
};

const createItemMock = (name: string, price: number) => {
  class CreateITem implements Items {
    constructor(public name: string, public price: number) {}
  }
  return new CreateITem(name, price);
};

const createSutWitchProducts = () => {
  const { sut, discountMock } = createSut();
  const item1 = createItemMock('camisa', 32);
  const item2 = createItemMock('meia', 45);
  sut.addItem(item1);
  sut.addItem(item2);
  return { sut, discountMock };
};

describe('Shopping cart', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should an empty car when no product is add', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 itens', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and total witch discount', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.total()).toBe(77);
    expect(sut.totalWitchDiscount()).toBe(77);
  });

  it('should clear the cart and add products', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove 1 item of cart', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call discount.calculate once when totalWitchDiscount is called', () => {
    const { sut, discountMock } = createSutWitchProducts();
    const spyDiscount = jest.spyOn(discountMock, 'calculate');
    sut.totalWitchDiscount();
    expect(spyDiscount).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWitchDiscount is called', () => {
    const { sut, discountMock } = createSutWitchProducts();
    const spyDiscount = jest.spyOn(discountMock, 'calculate');
    sut.totalWitchDiscount();
    expect(spyDiscount).toHaveBeenCalledWith(sut.total());
  });
});
