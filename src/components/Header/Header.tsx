import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC<{
  isInEditMode: boolean;
  canEdit: boolean;
  canDelete: boolean;
}> = (props) => {
  return (
    <header className={styles.header}>
      <p>Students</p>
      {props.canEdit && (
        <div className={styles["control-btns"]}>
          {props.isInEditMode && (
            <button
              disabled={!props.canDelete}
              className={!props.canDelete ? styles["btn-disabled"] : ""}
            >
              Delete
            </button>
          )}
          {<button>{props.isInEditMode ? "Done" : "Edit"}</button>}
        </div>
      )}
    </header>
  );
};

export default Header;
