import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
          {
            <button onClick={editClickandler}>
              {props.isInEditMode ? "Done" : "Edit"}
            </button>
          }
        </div>
      )}
    </header>
  );
};

export default Header;
