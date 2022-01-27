import "../../general-css/general.css";
import styles from "./Header.module.css";

const Header: React.FC<{
  canEdit: boolean;
  isInEditMode: boolean;
  canDelete: boolean;
  onEditClick: () => void;
  onDeleteClick: () => void;
}> = (props) => {
  const editClickandler = () => {
    props.onEditClick();
  };

  return (
    <header className={styles.header}>
      <p className={styles.title}>Students</p>
      {props.canEdit && (
        <div className={styles["control-btns"]}>
          {props.isInEditMode && (
            <button
              onClick={props.onDeleteClick}
              disabled={!props.canDelete}
              className={`btn ${styles.btn}`}
            >
              Delete
            </button>
          )}
          {
            <button className={`btn ${styles.btn}`} onClick={editClickandler}>
              {props.isInEditMode ? "Done" : "Edit"}
            </button>
          }
        </div>
      )}
    </header>
  );
};

export default Header;
