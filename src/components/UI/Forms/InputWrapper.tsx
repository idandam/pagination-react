import styles from "./InputWrapper.module.css";

const InputWrapper: React.FC<{
  id: string;
  img: string;
  alt: string;
}> = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.alt} className={styles.img} />

      {props.children}
    </div>
  );
};

export default InputWrapper;
