import styles from "./TypedInput.module.css";

const TypedInput: React.FC<{
  id: string;
  name: string;
  text: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  type?: string;
}> = (props) => {
  const atrr = { ...props };
  delete atrr.hasError;

  return (
    <div className={styles.container}>
      <label htmlFor={props.id} className={styles.label}>
        {props.text}
      </label>
      <input {...atrr} required className={styles.input} />
      {props.hasError && (
        <p className={styles.error}>
          {props.value.trim() ? `Invalid ${props.name}` : "Required field"}
        </p>
      )}
    </div>
  );
};

export default TypedInput;
