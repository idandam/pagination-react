import React from "react";
import { INITIAL_NUM_PAGES_TO_DISPLAY } from "../../constants/constants";
import calcPages from "../../Utils/calcPages";
import getConsecutivePages from "../../Utils/getConsecutivePages";
import getIndexRange from "../../Utils/getIndexRange";
import Students from "../Students/Students";
import StudentModel from "../../models/StudentModel";
import PaginationList from "./PaginationList";
import getStartPageOffset from "../../Utils/getStartPageOffset";
import "../../general-css/general.css";
import styles from "./Pagination.module.css";


// Note on scrolling after a page was changed:
// Since there're only 6 list items,
// I tought it will be a best user experience not to scroll to the top of the
// student list after a page was changed.

// Another solution is to make the pagination list sticky at the bottom. I didn't go
// for that solution however.

const Pagination: React.FC<{
  students: StudentModel[];
  title: string;
  maxStudentsPerPage: number;
  isInEditMode: boolean;
  onStudentClick: (id: string) => void;
  onPageChange: (value: number, isOffset?:boolean) => void;
  currPage: number;
}> = (props) => {
  const { currPage, onPageChange } = props;
  const pages = calcPages(props.students.length);

  const nextPageHandler = (): void => {
    if (currPage < pages) {
      onPageChange(1, true);
    }
  };

  const previousPageHandler = (): void => {
    if (currPage > 1) {
      onPageChange(-1, true);
    }
  };

  const pageChangeHandler = (event: any): void => {
    onPageChange(Number(event.target.textContent));
  };

  const getModelsInRange = (): StudentModel[] => {
    let range = getIndexRange(currPage, props.students.length);
    return props.students.slice(range.from, range.to);
  };

  const getDisplayedPages = (): number[] => {
    // Display maximum 3 pages anchors
    let maxPagesToDisplay = Math.min(INITIAL_NUM_PAGES_TO_DISPLAY, pages);
    let startPageOffset = getStartPageOffset(
      currPage,
      pages,
      maxPagesToDisplay
    );

    return getConsecutivePages(startPageOffset, maxPagesToDisplay);
  };
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <Students
        students={getModelsInRange()}
        onStudentClick={props.onStudentClick}
        isInEditMode={props.isInEditMode}
      />
      <PaginationList
        pagesToDisplay={getDisplayedPages()}
        onPreviousPage={previousPageHandler}
        onNextPage={nextPageHandler}
        onPageChange={pageChangeHandler}
        currPage={currPage}
        inEditMode={props.isInEditMode}
      />
    </main>
  );
};

export default Pagination;
