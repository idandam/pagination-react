import styles from "./ListCheckbox.module.css";

const ListCheckbox: React.FC<{ checked: boolean }> = (props) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" checked={props.checked} />
      <span className={styles.checkmark}></span>
    </div>
  );
};

export default ListCheckbox;
