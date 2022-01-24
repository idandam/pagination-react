import Student from "./Student";
import StudentModel from "../models/StudentModel";

const Students: React.FC<{ students: StudentModel[] }> = (props) => {
  return (
    <ul>
      {props.students.map((student) => (
        <Student
        
          key={student.id}
          name={student.name}
          age={student.age}
          gender={student.gender}
          school={student.school}
          email={student.email}
          graduated={student.graduated}
        />
      ))}
    </ul>
  );
};

export default Students;
