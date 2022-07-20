import {
  IndividualCustomer,
  EnterpriseCustomer,
  Customer,
} from './interfaces/customer-protocol';

export class individualCustomer implements IndividualCustomer, Customer {
  firstName: string;
  LastName: string;
  cpf: string;

  constructor(firstName: string, LastName: string, cpf: string) {
    (this.firstName = firstName), (this.LastName = LastName), (this.cpf = cpf);
  }
  get Name(): string {
    return this.firstName + ' ' + this.LastName;
  }
  get IDN(): string {
    return this.cpf;
  }
}

export class enterpriseCustomer implements EnterpriseCustomer, Customer {
  name: string;

  cnpj: string;

  constructor(Name: string, cnpj: string) {
    (this.name = Name), (this.cnpj = cnpj);
  }
  get Name(): string {
    return this.name;
  }
  get IDN(): string {
    return this.cnpj;
  }
}
