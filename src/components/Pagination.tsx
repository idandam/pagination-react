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

  const nextPage = () => {
    setCurrPage((page) => page + 1);
  };

  const previousPage = () => {
    setCurrPage((page) => page - 1);
  };

  const pageChangeHandler = (event: any) => {
    setCurrPage(Number(event.target.textContent));
  };

  const getModelsInRange = (): StudentModel[] => {
    let range = getIndexRange(currPage, props.students.length);
    return props.students.slice(range.from, range.to);
  };

  const getDisplayedPages = () => {
    // Display maximum 3 pages anchors
    let maxPagesToDisplay = Math.min(
      INITIAL_NUM_PAGES_TO_DISPLAY,
      Math.floor(pages / 2) + 1
    );
    let startingPage =
      Math.floor(currPage - 1 / maxPagesToDisplay) * maxPagesToDisplay;

    return getConsecutivePages(startingPage, maxPagesToDisplay);
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <main>
        <Students students={getModelsInRange()} />
      </main>
      <PaginationList pagesToDisplay={getDisplayedPages()} />
    </div>
  );
};

export default Pagination;
