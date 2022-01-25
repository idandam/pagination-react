import Student from "./Student";
import StudentModel from "../models/StudentModel";

import { useState } from "react";

const Students: React.FC<{
  students: StudentModel[];
  onStudentClick: (id: string) => void;
}> = (props) => {
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  console.log("select mode ? " + isSelectMode);
  console.log("selected", selected);

  const longPressHandler = (): void => {
    setIsSelectMode(true);
  };

  const studentClickHandler = (
    studentId: string,
    studentWasSelected?: boolean
  ): void => {
    console.log("studentSS click");
    if (isSelectMode) {
      if (studentWasSelected !== undefined) {
        setSelected((selected) => {
          let updatedSelected = [...selected];
          if (studentWasSelected && !selected.find((id) => id === studentId)) {
            updatedSelected.push(studentId);
          } else {
            updatedSelected = updatedSelected.filter((id) => id !== studentId);
            if (updatedSelected.length === 0) {
              setIsSelectMode(false);
            }
          }
          return updatedSelected;
        });
      }
    } else {
      props.onStudentClick(studentId);
    }
  };

  return (
    <ul>
      {props.students.map((student) => (
        <Student
          key={student.id}
          student={student}
          isSelectMode={isSelectMode}
          onClick={studentClickHandler}
          onLongPress={longPressHandler}
        />
      ))}
    </ul>
  );
};

export default Students;
