import Cpf from "./Cpf";

export default class Student {
  name: string;
  cpf: Cpf;
  constructor(name: string, cpf: Cpf) {
    this.name = name;
    this.cpf = cpf;
    this.validate();
  }

  validate() {
    const regexp = /^([A-Za-zÀ-ÖØ-öø-ÿ]+ )+([A-Za-zÀ-ÖØ-öø-ÿ])+$/;
    if (!regexp.test(this.name)) {
      throw new Error("Invalid student name");
    }
  }
}
