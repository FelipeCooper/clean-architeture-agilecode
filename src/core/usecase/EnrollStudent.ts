import EnrollmentRequest from "../dto/EnrollmentRequest";
import Cpf from "../entity/Cpf";
import Student from "../entity/Student";
import { StudentRepository } from "../repository/StudentRepository";

export default class EnrollStudent {
  constructor(private studentRepository: StudentRepository) { }
  execute(enrollmentRequest: EnrollmentRequest) {
    if (this.studentRepository.findByCpf(new Cpf(enrollmentRequest.cpf))) throw new Error("Duplicate student");
    this.studentRepository.create(new Student(enrollmentRequest.name, new Cpf(enrollmentRequest.cpf)));
  }
}
