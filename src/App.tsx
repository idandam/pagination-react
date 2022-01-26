import React, { useCallback, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Pagination from "./components/Pagination";
import students from "./models/students";
import { MAX_STUDENTS_PER_PAGE } from "./constants/constants";
import StudentDetails from "./components/StudentDetails";
import "./App.css";
import Header from "./components/Header/Header";
import canEdit from "./Utils/canEdit";

function App() {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const editModeHandler = (): void => {
    setIsInEditMode((isInEditMode) => !isInEditMode);
  };

  const allowDeleteandler = useCallback((canDelete: boolean): void => {
    setCanDelete(canDelete);
  }, []);

  const deleteStudentsHandler = () => {
    console.log("in delete student handler in App");
  };

  const studentClickHandler = (id: string): void => {
    navigate(`/students/${id}`);
  };

  return (
    <div className="App">
      <Header
        canEdit={canEdit(location.pathname)}
        isInEditMode={isInEditMode}
        canDelete={canDelete}
        onEditClick={editModeHandler}
        onDeleteClick={deleteStudentsHandler}
      />
      <Routes>
        <Route
          path="students"
          element={
            <Pagination
              students={students}
              title="Our Students"
              maxStudentsPerPage={MAX_STUDENTS_PER_PAGE}
              isInEditMode={isInEditMode}
              onStudentClick={studentClickHandler}
              onSelectStudent={allowDeleteandler}
            />
          }
        />
        <Route
          path="students/:studentId"
          element={<StudentDetails students={students} />}
        />
      </Routes>
    </div>
  );
}

export default App;
