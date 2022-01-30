import styles from "./PaginationList.module.css";

const PaginationList: React.FC<{
  pagesToDisplay: number[];
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (event: any) => void;
  currPage: number;
  inEditMode: boolean;
}> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button
          onClick={props.onPreviousPage}
          disabled={props.inEditMode}
          className={styles.btn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles["btn__icon"]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {props.pagesToDisplay.map((page) => (
          <button
            key={page}
            onClick={props.onPageChange}
            disabled={props.inEditMode}
            className={`${styles["btn__page"]} ${
              page === props.currPage ? styles["btn__page--current"] : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={props.onNextPage}
          disabled={props.inEditMode}
          className={styles.btn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles["btn__icon"]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PaginationList;
