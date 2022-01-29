import { ReactComponentElement } from "react";
import styles from "./TypedInput.module.css";

const TypedInput: React.FC<{
  id: string;
  name: string;
  text: string;
  value: string;
  img: string;
  alt: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  type?: string;
}> = (props) => {
  const atrr = { ...props };
  delete atrr.hasError;

  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.alt} className={styles.img} />
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
