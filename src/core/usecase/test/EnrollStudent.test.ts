import EnrollmentRequest from "../../dto/EnrollmentRequest";
import EnrollStudent from "../EnrollStudent";
import { StudentMemoryRepository } from "./repository/StudentMemoryRepository";

describe("Enroll Student test", () => {
  let enrollStudent: EnrollStudent;
  beforeAll(() => {

    enrollStudent = new EnrollStudent(new StudentMemoryRepository());
  })

  test("Should not enroll without valid student name", () => {
    const enrollmentRequest = new EnrollmentRequest("Cooper", "549.032.950-52");
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
      new Error("Invalid student name")
    );
  });

  test("Should not enroll without valid student cpf", () => {
    const enrollmentRequest = new EnrollmentRequest("Felipe Cooper", "123.456.789-99")
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
      new Error("Invalid cpf")
    );
  })
  test("Should not enroll without valid student cpf", () => {
    const enrollmentRequest = new EnrollmentRequest("Felipe Cooper", "549.032.950-52")
    enrollStudent.execute(enrollmentRequest);
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
      new Error("Duplicate student")
    );
  })
})

