/**
 * This method should actually do the matching with with a regular expression in a real app
 * @param pathname
 * @returns true if pathname === "/students" or pathname === "/students/"
 */
const canEdit = (pathname: string): boolean => {
  const pathParts = pathname.split("/");
  return (
    2 <= pathParts.length &&
    pathParts.length <= 3 &&
    pathParts[1] === "students"
  );
};
export default canEdit;
