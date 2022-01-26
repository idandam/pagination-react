import Student from "./Student";
import StudentModel from "../models/StudentModel";

import { useEffect, useState } from "react";

const Students: React.FC<{
  students: StudentModel[];
  onStudentClick: (id: string) => void;
  isInEditMode: boolean;
  onSelectStudent: (canDelete: boolean) => void;
}> = (props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { onSelectStudent } = props;

  useEffect(() => {
    console.log(selected);
    if (selected.length === 0) {
      onSelectStudent(false);
    }
  }, [selected, onSelectStudent]);

  const studentClickHandler = (
    studentId: string,
    studentWasSelected?: boolean
  ): void => {
    if (props.isInEditMode) {
      if (studentWasSelected !== undefined) {
        setSelected((selected) => {
          if (selected.length === 0) {
            onSelectStudent(true);
          }
          let updatedSelected = [...selected];
          if (studentWasSelected && !selected.find((id) => id === studentId)) {
            updatedSelected.push(studentId);
          } else {
            updatedSelected = updatedSelected.filter((id) => id !== studentId);
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
          isInEditMode={props.isInEditMode}
          onClick={studentClickHandler}
        />
      ))}
    </ul>
  );
};

export default Students;
