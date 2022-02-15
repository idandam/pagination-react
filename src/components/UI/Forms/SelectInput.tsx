import { UNIVERSITIES } from "../../../constants/constants";
import InputWrapper from "./InputWrapper";

import styles from "./SelectInput.module.css";
import "../../../general-css/general.css";

const SelectInput: React.FC<{
  id: string;
  name: string;
  text: string;
  value: string;
  img: string;
  alt: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = (props) => {
  return (
    <InputWrapper id={props.id} img={props.img} alt={props.alt}>
      <label htmlFor={props.id} className="form__label">
        {props.text}
      </label>
      <select
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      >
        {UNIVERSITIES.map((university) => (
          <option key={university} value={university}>
            {university}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};

export default SelectInput;
