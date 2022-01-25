import StudentModel from "../models/StudentModel";
import { useLongPress } from "react-use";
import { useState } from "react";

const Student: React.FC<{
  student: StudentModel;
  isSelectMode: boolean;
  onClick: (studentId: string, studentWasSelected?: boolean) => void;
  onLongPress: () => void;
}> = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  let longPressHandler = (event: any): void => {
    if (!props.isSelectMode) {
      props.onLongPress();
    }
  };

  const defaultOptions = {
    isPreventDefault: true,
    delay: 300,
  };

  const longPressEvent = useLongPress(longPressHandler, defaultOptions);

  const studentClickHandler = (): void => {
    props.onClick(props.student.id);
  };

  const selectStudentHandler = (event:any):void => {
    if (props.isSelectMode) {
      setIsSelected(event.target.checked);
      props.onClick(props.student.id, event.target.checked);
      
    }
  };

  return (
    <li
      id={props.student.id}
      onClick={studentClickHandler}
      {...(!props.isSelectMode ? longPressEvent : {})}
    >
      {props.student.name}
      {props.isSelectMode && <input onChange={selectStudentHandler} type="checkbox" />}
    </li>
  );
};

export default Student;
