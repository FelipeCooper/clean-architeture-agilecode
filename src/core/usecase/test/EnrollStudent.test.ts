import EnrollmentRequest from "../../dto/EnrollmentRequest";
import EnrollStudent from "../EnrollStudent";

test("Should not enroll without valid student name", () => {
  const enrollmentRequest = new EnrollmentRequest("Cooper");
  const enrollStudent = new EnrollStudent();
  expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
    new Error("Invalid student name")
  );
});
