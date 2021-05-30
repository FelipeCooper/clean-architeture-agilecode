export default class Cpf {
  value: string;

  constructor(value: string) {
    this.value = value;
    if (!this.validate()) throw new Error("Invalid cpf");
  }

  validate() {
    const FACTOR_DIGIT_1 = 10;
    const FACTOR_DIGIT_2 = 11;
    const MAX_DIGITS_1 = 9;
    const MAX_DIGITS_2 = 10;
    this.value = this.extractDigits(this.value);
    if (this.isInvalidLength(this.value)) return false;
    if (this.isBlocked(this.value)) return false;
    const digit1 = this.calculateDigit(this.value, FACTOR_DIGIT_1, MAX_DIGITS_1);
    const digit2 = this.calculateDigit(this.value, FACTOR_DIGIT_2, MAX_DIGITS_2);
    let calculatedCheckDigit = `${digit1}${digit2}`;
    return this.getCheckDigit(this.value) == calculatedCheckDigit;
  }

  extractDigits(cpf: string) {
    return cpf.replace(/\D/g, "");
  }

  isInvalidLength(cpf: string) {
    return cpf.length !== 11;
  }

  isBlocked(cpf: string) {
    const [digit1] = cpf;
    return cpf.split("").every(digit => digit === digit1);
  }

  calculateDigit(cpf: string, factor: number, max: number) {
    let total = 0;
    for (const digit of this.toDigitArray(cpf).slice(0, max)) {
      total += digit * factor--;
    }
    return (total % 11 < 2) ? 0 : (11 - total % 11);
  }

  toDigitArray(cpf: string) {
    return [...cpf].map(digit => parseInt(digit));
  }

  getCheckDigit(cpf: string) {
    return cpf.slice(9);
  }
}