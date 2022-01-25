import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Pagination from "./components/Pagination";
import students from "./models/students";
import { MAX_STUDENTS_PER_PAGE } from "./constants/constants";
import StudentDetails from "./components/StudentDetails";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const enterEditModeHandler = () => {
    setIsInEditMode(true);
  };
  const leaveEditModeHandler = () => {
    setIsInEditMode(false);
  };
  const allowDeleteHandler = () => {
    setCanDelete(true);
  };
  const disableDeleteHandler = () => {
    setCanDelete(false);
  };

  const studentClickHandler = (id: string): void => {
    navigate(`/students/${id}`);
  };

  return (
    <div className="App">
      <Header
        isInEditMode={isInEditMode}
        canEdit={location.pathname === "/students/"}
        canDelete={canDelete}
      />
      <Routes>
        <Route
          path="students"
          element={
            <Pagination
              students={students}
              title="Our Students"
              maxStudentsPerPage={MAX_STUDENTS_PER_PAGE}
              onStudentClick={studentClickHandler}
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
