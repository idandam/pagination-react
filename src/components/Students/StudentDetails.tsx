import { useParams } from "react-router-dom";
import StudentModel from "../../models/StudentModel";

const StudentDetails: React.FC<{ students: StudentModel[] }> = (props) => {
  let { studentId } = useParams();
  let student = props.students.find((student) => student.id === studentId);

  return (
    <>
      {student && (
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" value={student.name} />
          <label htmlFor="age">Age</label>
          <input name="age" value={student.age} />
          <label htmlFor="gender">Gender</label>
          <input name="gender" value={student.gender} readOnly />
          <label htmlFor="school">School</label>
          <input name="school" value={student.school} />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" value={student.email} />
          <label htmlFor="graduated">Graduated</label>
          <input name="graduated" type="checkbox" checked={student.graduated} />
        </form>
      )}
    </>
  );
};

export default StudentDetails;

// name: string;
// age: number;
// gender: string;
// school: string;
// email: string;
// graduated: boolean;
