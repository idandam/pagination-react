import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Pagination from "./components/Pagination";
import students from "./models/students";
import { MAX_STUDENTS_PER_PAGE } from "./constants/constants";
import StudentDetails from "./components/StudentDetails";
import "./App.css";

function App() {
  let navigate = useNavigate();

  const studentClickHandler = (id: string): void => {
    navigate(`/students/${id}`);
  };

  return (
    <div className="App">
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
