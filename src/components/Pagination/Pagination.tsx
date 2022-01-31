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

const Pagination: React.FC<{
  students: StudentModel[];
  title: string;
  maxStudentsPerPage: number;
  isInEditMode: boolean;
  onStudentClick: (id: string) => void;
  onPageChange: (value: number, isOffset?: boolean) => void;
  currPage: number;
}> = (props) => {
  let currPage = props.currPage;
  const onPageChange = props.onPageChange;
  const pages = calcPages(props.students.length);

  // Can happen if the user deleted all the student from the current page.
  if (currPage > pages) {
    currPage = 1;
  }

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
    <main className={`container ${styles.container}`}>
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
        pages={pages}
      />
    </main>
  );
};

export default Pagination;
