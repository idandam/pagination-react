import StudentModel from "../models/StudentModel";

const getPage = (
  position: number,
  maxDataPerPage: number
): number => {
  return position > -1 ? Math.floor(position / maxDataPerPage) + 1 : 1;
};
export default getPage;
