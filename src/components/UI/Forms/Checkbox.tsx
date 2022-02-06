import styles from "./Checkbox.module.css";
import "../../../general-css/general.css";

const Checkbox: React.FC<{
  id: string;
  name: string;
  text: string;
  type: string;
  defaultChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div className="container__checkbox">
      <input
        {...props}
        className={`${props.defaultChecked ? "checked" : ""}`}
      />
      <span className="checkmark"></span>
      <label htmlFor={props.id} className={styles.label}>
        {props.text}
      </label>
    </div>
  );
};

export default Checkbox;
