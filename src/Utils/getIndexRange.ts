import { MAX_STUDENTS_PER_PAGE } from "../constants/constants";
import Range from "./Range";

/**
 *
 * @param page page number
 * @param numOfStudents total number of students
 * @returns {Range}
 */
const getIndexRange = (page: number, numOfStudents: number): Range => {
  let from = (page - 1) * MAX_STUDENTS_PER_PAGE;
  let to =
    numOfStudents - from <= MAX_STUDENTS_PER_PAGE
      ? numOfStudents
      : from + MAX_STUDENTS_PER_PAGE;

  return { from, to };
};

export default getIndexRange;
