import StudentDetails from "./StudentDetails";
import StudentModel from "../../models/StudentModel";
import { useParams } from "react-router-dom";

const StudentDetailsWrapper: React.FC<{ students: StudentModel[] }> = (
  props
) => {
  const { studentId } = useParams();
  const student = props.students.find((student) => student.id === studentId);
  return student ? (
    <StudentDetails student={student} />
  ) : (
    <p>Student doesn't exist</p>
  );
};

export default StudentDetailsWrapper;
