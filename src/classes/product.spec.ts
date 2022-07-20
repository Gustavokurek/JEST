import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('product', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should have properties name and price', () => {
    const sut = createSut('camisa', 50.5);
    expect(sut.name).toBe('camisa');
    expect(sut.price).toBeCloseTo(50.5);
  });
});
