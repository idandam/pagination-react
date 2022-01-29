/**
 *
 * @param pathname
 * @returns true if the main content is the students, false otherwise
 */
const canEdit = (pathname: string, numOfStudents: number): boolean => {
  return pathname.split("/").join("") === "students" && numOfStudents > 0;
};
export default canEdit;
