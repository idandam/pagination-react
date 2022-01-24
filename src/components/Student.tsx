import StudentProps from "../models/StudentProps";

const Student: React.FC<StudentProps> = (props) => {
  const studentClickHandler = () => {};
  return (
    <li id={props.id} onClick={studentClickHandler}>
      {props.name}
    </li>
  );
};

export default Student;
