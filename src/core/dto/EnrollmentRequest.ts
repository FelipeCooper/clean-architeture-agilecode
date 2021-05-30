export default class EnrollmentRequest {
  name: string;
  cpf: string;
  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }
}
