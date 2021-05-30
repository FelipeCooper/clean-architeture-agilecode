import Cpf from "../../../entity/Cpf";
import Student from "../../../entity/Student";
import { StudentRepository } from "../../../repository/StudentRepository";

export class StudentMemoryRepository implements StudentRepository {

  students: Student[] = [];

  create(student: Student): void {
    this.students.push(student);
  }
  findAll(): Student[] {
    throw new Error("Method not implemented.");
  }
  findByCpf(cpf: Cpf): Student {
    return this.students.find(student => student.cpf.value === cpf.value) as Student;
    ;
  }

}