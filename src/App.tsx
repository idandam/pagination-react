import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Pagination from "./components/Pagination";
import StudentModel from "./models/StudentModel";
import studentsMock from "./models/students";
import { MAX_STUDENTS_PER_PAGE } from "./constants/constants";
import StudentDetails from "./components/StudentDetails";
import "./App.css";
import Header from "./components/Header/Header";
import canEdit from "./Utils/canEdit";

function App() {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [students, setStudents] = useState<StudentModel[]>(studentsMock);
  const [selected, setSelected] = useState<string[]>([]);

  const location = useLocation();
  const navigate = useNavigate();

  const studentSelectHandler = (
    studentId: string,
    studentWasSelected?: boolean
  ) => {
    setSelected((selected) => {
      let updatedSelected = [...selected];

      if (studentWasSelected && !selected.find((id) => id === studentId)) {
        updatedSelected.push(studentId);
      } else {
        updatedSelected = updatedSelected.filter((id) => id !== studentId);
      }
      return updatedSelected;
    });
  };

  const studentClickHandler = (
    studentId: string,
    studentWasSelected?: boolean
  ): void => {
    if (isInEditMode) {
      studentSelectHandler(studentId, studentWasSelected);
    } else {
      navigate(`/students/${studentId}`);
    }
  };

  const editModeHandler = (): void => {
    setIsInEditMode((isInEditMode) => {
      // If this is true then in the next render cycle it will be false
      // which means that we our not in edit mode
      if (isInEditMode) {
        setSelected([]);
      }
      return !isInEditMode;
    });
  };

  const deleteStudentsHandler = (): void => {
    setStudents((students) => {
      let updatedStudents = [...students];
      selected.forEach((studentId) => {
        updatedStudents = updatedStudents.filter(
          (student) => student.id !== studentId
        );
      });
      setSelected([]);
      return updatedStudents;
    });
  };

  return (
    <div className="App">
      <Header
        canEdit={canEdit(location.pathname)}
        isInEditMode={isInEditMode}
        canDelete={selected.length > 0}
        onEditClick={editModeHandler}
        onDeleteClick={deleteStudentsHandler}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/students" />} />
        <Route
          path="students"
          element={
            <Pagination
              students={students}
              title="Our Students"
              maxStudentsPerPage={MAX_STUDENTS_PER_PAGE}
              isInEditMode={isInEditMode}
              onStudentClick={studentClickHandler}
            />
          }
        />
        <Route
          path="students/:studentId"
          element={<StudentDetails students={students} />}
        />
        <Route
          path="*"
          element={<p>The page you are looking for does not exist</p>}
        />
      </Routes>
    </div>
  );
}

export default App;
