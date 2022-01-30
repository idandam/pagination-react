import StudentModel from "../models/StudentModel";

const findIndex = (id: string, students: StudentModel[]) => {
  return students.findIndex((student) => student.id === id);
};

export default findIndex;
