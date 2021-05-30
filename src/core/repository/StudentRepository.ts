import Cpf from "../entity/Cpf";
import Student from "../entity/Student";

export interface StudentRepository {
  create(student: Student): void;
  findAll(): Student[];
  findByCpf(cpf: Cpf): Student | null;
}