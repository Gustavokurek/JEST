import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('persistency', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return undefined', () => {
    const sut = createSut('camisa', 50.5);
    expect(sut.name).toBe('camisa');
    expect(sut.price).toBeCloseTo(50.5);
  });
});
