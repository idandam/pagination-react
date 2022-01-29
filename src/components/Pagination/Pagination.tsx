import React from "react";
import { useState } from "react";
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
}> = (props) => {
  const [currPage, setCurrPage] = useState(1);
  const pages = calcPages(props.students.length);

  const nextPageHandler = (): void => {
    if (currPage < pages) {
      setCurrPage((page) => page + 1);
    }
  };

  const previousPageHandler = (): void => {
    if (currPage > 1) {
      setCurrPage((page) => page - 1);
    }
  };

  const pageChangeHandler = (event: any): void => {
    setCurrPage(Number(event.target.textContent));
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
    <main className="container grid__1-col">
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
