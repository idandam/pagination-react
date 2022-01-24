import Student from "./Student";
import StudentModel from "../models/StudentModel";

const Students: React.FC<{ students: StudentModel[] }> = (props) => {
  return (
    <>
      <ul>
        {props.students.map((student) => (
          <Student
            // This key is only used for this demonstration project.
            // In practice I will never use this kind of a key
            key={student.name}
            name={student.name}
            age={student.age}
            gender={student.gender}
            school={student.school}
            email={student.email}
            graduated={student.graduated}
          />
        ))}
      </ul>
    </>
  );
};

export default Students;
