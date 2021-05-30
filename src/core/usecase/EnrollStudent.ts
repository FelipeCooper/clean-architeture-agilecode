import EnrollmentRequest from "../dto/EnrollmentRequest";
import Student from "../entity/Student";

export default class EnrollStudent {
  execute(enrollmentRequest: EnrollmentRequest) {
    let student: Student = new Student(enrollmentRequest.name);
    student.validate();
  }
}
