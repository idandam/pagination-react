import React, { SyntheticEvent } from "react";
import { useState } from "react";
import {
  INITIAL_NUM_OF_STUDENTS,
  INITIAL_NUM_PAGES_TO_DISPLAY,
} from "../constants/constants";
import calcPages from "../Utils/calcPages";
import getConsecutivePages from "../Utils/getConsecutivePages";
import getIndexRange from "../Utils/getIndexRange";
import Students from "./Students";
import StudentModel from "../models/StudentModel";
import PaginationList from "./PaginationList";

const Pagination: React.FC<{
  students: StudentModel[];
  title: string;
  maxStudentsPerPage: number;
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
    // The common case
    let startPageOffset =
      Math.floor((currPage - 1) / maxPagesToDisplay) * maxPagesToDisplay;
    // If reached to the end of the displayed panigation list
    // and the number of hidden pages left is less then the total number of pages
    // then start from an offset that will allow to display the required number of pages
    // until the last page
    if (
      (currPage - 1) % maxPagesToDisplay === 0 &&
      pages - currPage < maxPagesToDisplay
    ) {
      startPageOffset = pages - maxPagesToDisplay;
    }

    return getConsecutivePages(startPageOffset, maxPagesToDisplay);
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <main>
        <Students students={getModelsInRange()} />
      </main>
      <PaginationList
        pagesToDisplay={getDisplayedPages()}
        onPreviousPage={previousPageHandler}
        onNextPage={nextPageHandler}
        onPageChange={pageChangeHandler}
      />
    </div>
  );
};

export default Pagination;
