import students from "../models/students";

/**
 * This method should actually do the matching with with a regular expression in a real app
 * @param pathname
 * @returns true if pathname === "/students" or pathname === "/students/"
 */
const canEdit = (pathname: string): boolean => {
  return pathname.split("/").join("") === "students";
};
export default canEdit;
