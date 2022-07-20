export interface Customer {
  get Name(): string;
  get IDN(): string;
}
// criar uma interface para cada cliente, e não forçar nenhum cliente a usar uma interface que ele não precisa
export interface IndividualCustomer {
  firstName: string;
  LastName: string;
  cpf: string;
}
export interface EnterpriseCustomer {
  name: string;
  cnpj: string;
}
