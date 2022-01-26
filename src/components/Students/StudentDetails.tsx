import { useParams } from "react-router-dom";
import StudentModel from "../../models/StudentModel";
import Checkbox from "../UI/Forms/Checkbox";
import TypedInput from "../UI/Forms/TypedInput";

const StudentDetails: React.FC<{ students: StudentModel[] }> = (props) => {
  let { studentId } = useParams();
  let student = props.students.find((student) => student.id === studentId);

  return (
    <>
      {student && (
        <form>
          <TypedInput id="name" text="Name" value={student.name} />
          <TypedInput id="age" text="Age" value={student.age.toString()} />
          <TypedInput id="school" text="School" value={student.school} />
          <TypedInput
            id="email"
            text="Email"
            value={student.email}
            type="email"
          />
          <Checkbox
            id="graduated"
            text="Graduated"
            type="checkbox"
            checked={student.graduated}
          />
          <button>Submit</button>
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
