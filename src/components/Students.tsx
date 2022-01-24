import Student from "./Student";
import StudentModel from "../models/StudentModel";

const Students: React.FC<{
  students: StudentModel[];
  onStudentClick: (id: string) => void;
}> = (props) => {
  const listClickHandler = (event: any) => {
    let listItem = event.target.closest("li");
    if (listItem) {
      props.onStudentClick(listItem.id);
    }
  };
  return (
    <ul onClick={listClickHandler}>
      {props.students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
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
