import Student from "./Student";
import StudentModel from "../models/StudentModel";


const Students: React.FC<{
  students: StudentModel[];
  onStudentClick: (id: string) => void;
  isInEditMode: boolean;

}> = (props) => {
 

  return (
    <ul>
      {props.students.map((student) => (
        <Student
          key={student.id}
          student={student}
          isInEditMode={props.isInEditMode}
          onClick={props.onStudentClick}
        />
      ))}
    </ul>
  );
};

export default Students;
