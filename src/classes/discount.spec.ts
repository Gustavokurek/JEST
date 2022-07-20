import { Discount, NoDiscount, TenPercentDiscount } from './discount';

const createSut = (className: new () => Discount) => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should have value witch no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(50)).toBeCloseTo(50);
  });

  it('should have value witch 10% of discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(50)).toBeCloseTo(45);
  });
});
