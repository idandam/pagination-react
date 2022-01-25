import StudentModel from "../models/StudentModel";
import { useLongPress } from "react-use";

const Student: React.FC<{
  student: StudentModel;
  isSelectMode: boolean;
  onClick: (id: string) => void;
  onLongPress: (id: string) => void;
}> = (props) => {
  let longPressHandler = (event: any): void => {
    event.target.style.backgroundColor = "green";
    props.onLongPress(event.target.id);
  };

  const defaultOptions = {
    isPreventDefault: true,
    delay: 300,
  };

  const longPressEvent = useLongPress(longPressHandler, defaultOptions);

  const studentClickHandler = (event: any): void => {
    if (props.isSelectMode) {
      event.target.style.backgroundColor = "green";
    } else {
      props.onClick(props.student.id);
    }
  };

  return (
    <li id={props.student.id} onClick={studentClickHandler} {...longPressEvent}>
      {props.student.name}
    </li>
  );
};

export default Student;
