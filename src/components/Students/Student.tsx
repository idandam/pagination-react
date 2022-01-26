import StudentModel from "../../models/StudentModel";
import { useEffect, useState } from "react";

const Student: React.FC<{
  student: StudentModel;
  isInEditMode: boolean;
  onClick: (studentId: string, studentWasSelected?: boolean) => void;
}> = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const { isInEditMode } = props;

  useEffect(() => {
    if (!isInEditMode) {
      setIsSelected(false);
    }
  }, [isInEditMode]);
  const studentClickHandler = (): void => {
    if (!props.isInEditMode) {
      props.onClick(props.student.id);
    } else {
      setIsSelected((isSelected) => !isSelected);
      props.onClick(props.student.id, !isSelected);
    }
  };

  return (
    <li id={props.student.id} onClick={studentClickHandler}>
      {props.student.name}
      {props.isInEditMode && <input checked={isSelected} type="checkbox" />}
    </li>
  );
};

export default Student;
