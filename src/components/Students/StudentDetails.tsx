import { useState } from "react";
import StudentModel from "../../models/StudentModel";
import useInput from "../hooks/use-input";
import Checkbox from "../UI/Forms/Checkbox";
import TypedInput from "../UI/Forms/TypedInput";
import "../../general-css/general.css";
import styles from "./StudentDetails.module.css";

const StudentDetails: React.FC<{
  student: StudentModel;
  onUpdateStudent: (updatedStudent: StudentModel) => void;
}> = (props) => {
  const { student } = props;
  const [graduated, setGraduated] = useState(student.graduated);

  const {
    value: name,
    isValid: isNameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "", student.name);

  const {
    value: age,
    isValid: isAgeValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangedHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput((value) => {
    let n = Number(value);
    return !isNaN(n) && n > 0;
  }, student.age.toString());

  const {
    value: school,
    isValid: isSchoolValid,
    hasError: schoolHasError,
    valueChangeHandler: schoolChangedHandler,
    inputBlurHandler: schoolBlurHandler,
    reset: resetSchool,
  } = useInput((value) => value.trim() !== "", student.school);

  const {
    value: email,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(
    (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
    student.email
  );

  const graduatedChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGraduated(event.target.checked);
  };

  const isFormValid =
    isNameValid && isAgeValid && isEmailValid && isSchoolValid;

  const submitHandler = (event: any): void => {
    event.preventDefault();

    if (!isFormValid) return;

    resetAge();
    resetEmail();
    resetName();
    resetSchool();

    props.onUpdateStudent({
      name,
      age: Number(age),
      school,
      email,
      graduated,
      id: student.id,
    });
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className={styles.form}>
        <TypedInput
          id="name"
          name="name"
          text="Name"
          value={name}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          hasError={nameHasError}
        />
        <TypedInput
          id="age"
          name="age"
          text="Age"
          value={age}
          onChange={ageChangedHandler}
          onBlur={ageBlurHandler}
          hasError={ageHasError}
        />
        <TypedInput
          id="school"
          name="school"
          text="School"
          value={school}
          onChange={schoolChangedHandler}
          onBlur={schoolBlurHandler}
          hasError={schoolHasError}
        />

        <TypedInput
          id="email"
          name="email"
          text="Email"
          value={email}
          type="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
        />
        <Checkbox
          id="graduated"
          name="graduated"
          text="Graduated"
          type="checkbox"
          checked={graduated}
          onChange={graduatedChangeHandler}
        />
        <button disabled={!isFormValid} className={`btn ${styles.btn}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentDetails;
