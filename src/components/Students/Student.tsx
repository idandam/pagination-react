import StudentModel from "../../models/StudentModel";
import { useEffect, useState } from "react";
import "../../general-css/general.css";
import styles from "./Student.module.css";

const Student: React.FC<{
  student: StudentModel;
  isInEditMode: boolean;
  onClick: (studentId: string, studentWasSelected?: boolean) => void;
  img: string;
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
    <li
      id={props.student.id}
      onClick={studentClickHandler}
      className={`list-item ${styles["grid__3-col"]}`}
    >
      {props.isInEditMode && <input checked={isSelected} type="checkbox" />}
      <img src={props.img} alt="A person" />
      {props.student.name}
    </li>
  );
};

export default Student;
