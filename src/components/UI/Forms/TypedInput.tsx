import InputWrapper from "./InputWrapper";
import styles from "./TypedInput.module.css";
import "../../../general-css/general.css"

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
    <InputWrapper id={props.id} img={props.img} alt={props.alt}>
      <label htmlFor={props.id} className="form__label">
        {props.text}
      </label>
      <input {...atrr} required className={styles.input} />
      {props.hasError && (
        <p className={styles.error}>
          {props.value.trim() ? `Invalid ${props.name}` : "Required field"}
        </p>
      )}
    </InputWrapper>
  );
};

export default TypedInput;
