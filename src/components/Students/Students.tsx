import Student from "./Student";
import StudentModel from "../../models/StudentModel";
import person1 from "../../img/Ellipse 10.png";
import person2 from "../../img/Ellipse 11.png";
import person3 from "../../img/Ellipse 12.png";
import person4 from "../../img/Ellipse 13.png";
import person5 from "../../img/Ellipse 14.png";
import person6 from "../../img/Ellipse 15.png";

const dummy = [person1, person2, person3,person4,person5,person6];

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
