import { MAX_STUDENTS_PER_PAGE } from "../constants/constants";
/**
 *
 * @param numOfStudents number of students
 * @returns the number of pages required to display the students
 */
const calcPages = (numOfStudents: number): number =>
  numOfStudents > 0 ? Math.ceil(numOfStudents / MAX_STUDENTS_PER_PAGE) : 0;

export default calcPages;
