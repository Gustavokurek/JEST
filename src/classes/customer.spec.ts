import { enterpriseCustomer, individualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
) => {
  return new individualCustomer(firstName, lastName, cpf);
};

const createEnterPriseCustomer = (name: string, cnpj: string) => {
  return new enterpriseCustomer(name, cnpj);
};

afterEach(() => {
  jest.clearAllMocks();
});
describe('individualCustomer', () => {
  it('should have properties firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Gustavo', 'Kurek', '134311333461');
    expect(sut.firstName).toBe('Gustavo');
    expect(sut.LastName).toBe('Kurek');
    expect(sut.cpf).toBe('134311333461');
  });

  it('should have methods Name, IDN for individual customer', () => {
    const sut = createIndividualCustomer('Gustavo', 'Kurek', '134311333461');
    expect(sut.Name).toBe('Gustavo Kurek');
    expect(sut.IDN).toBe('134311333461');
  });
});

describe('enterpriseCustomer', () => {
  it('should have properties name, cnpj', () => {
    const sut = createEnterPriseCustomer('Facebook', '131321321321');
    expect(sut.Name).toBe('Facebook');
    expect(sut.cnpj).toBe('131321321321');
  });

  it('should have methods Name, IDN for enterprise customer', () => {
    const sut = createEnterPriseCustomer('Facebook', '131321321321');
    expect(sut.Name).toBe('Facebook');
    expect(sut.IDN).toBe('131321321321');
  });
});
