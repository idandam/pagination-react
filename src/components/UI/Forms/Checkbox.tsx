import styles from "./Checkbox.module.css";

const Checkbox: React.FC<{
  id: string;
  name: string;
  text: string;
  type: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div className={styles.container}>
      <input {...props} className={styles.input} />
      <label htmlFor={props.id}>
        {props.text}
      </label>
      <span className={styles.checkmark}></span>
    </div>
  );
};
export default Checkbox;
