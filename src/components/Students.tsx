import Student from "./Student";
import StudentModel from "../models/StudentModel";

import { useState } from "react";

const Students: React.FC<{
  students: StudentModel[];
  onStudentClick: (id: string) => void;
}> = (props) => {
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const longPressHandler = (studentId: string): void => {
    if (!isSelectMode) {
      setIsSelectMode(true);
    }
    if (!selected.find((id) => id === studentId)) {
      setSelected((selected) => [...selected, studentId]);
    }
  };

  return (
    <ul>
      {props.students.map((student) => (
        <Student
          key={student.id}
          student={student}
          isSelectMode={isSelectMode}
          onClick={props.onStudentClick}
          onLongPress = {longPressHandler}
        />
      ))}
    </ul>
  );
};

export default Students;
