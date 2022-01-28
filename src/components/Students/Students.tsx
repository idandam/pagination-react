import Student from "./Student";
import StudentModel from "../../models/StudentModel";
import person1 from "../../img/0.jpg";
import person2 from "../../img/1.jpg";
import person3 from "../../img/2.jpg";
import person4 from "../../img/3.jpg";
import person5 from "../../img/4.jpg";
import person6 from "../../img/5.jpg";

const dummy = [person1, person2, person3, person4, person5, person6];

const Students: React.FC<{
  students: StudentModel[];
  onStudentClick: (id: string) => void;
  isInEditMode: boolean;
}> = (props) => {
  return (
    <ul>
      {props.students.map((student, index) => (
        <Student
          key={student.id}
          student={student}
          isInEditMode={props.isInEditMode}
          onClick={props.onStudentClick}
          img={dummy[index]}
        />
      ))}
    </ul>
  );
};

export default Students;
