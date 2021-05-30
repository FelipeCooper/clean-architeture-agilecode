export default class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  validate() {
    const regexp = /^([A-Za-zÀ-ÖØ-öø-ÿ]+ )+([A-Za-zÀ-ÖØ-öø-ÿ])+$/;
    if (!regexp.test(this.name)) {
      throw new Error("Invalid student name");
    }
  }
}
