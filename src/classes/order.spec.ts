/* eslint-disable @typescript-eslint/no-empty-function */
// eslint-disable-next-line @typescript-eslint/no-empty-function
import { Items } from './interfaces/card-items';
import { Customer } from './interfaces/customer-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { ShoppingCartProtocol } from './interfaces/shoppingCart-Protocol';
import { Order } from './order';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<Items[]> {
    return [];
  }
  addItem(): void {}
  removeItem(): void {}
  total(): number {
    return 1;
  }
  totalWitchDiscount(): number {
    return 2;
  }
  clear(): void {}
  isEmpty(): boolean {
    return false;
  }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements Customer {
  get Name(): string {
    return '';
  }
  get IDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );
  return { sut, shoppingCartMock, messagingMock, persistencyMock };
};

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();

    const shoppingCartSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValue(true);
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should make checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();

    const shoppingCartSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValue(false);
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('close');
  });

  it('should send a message to customer', () => {
    const { sut, messagingMock } = createSut();
    const messagingSpy = jest.spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(messagingSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencySpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencySpy).toHaveBeenCalledTimes(1);
  });

  it('should clear the cart', () => {
    const { sut, shoppingCartMock } = createSut();

    const shoppingCartSpy = jest.spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
  });
});
