import React from "react";
import { Routes, Route } from "react-router-dom";
import Pagination from "./components/Pagination";
import students from "./models/students";
import { MAX_STUDENTS_PER_PAGE } from "./constants/constants";
import "./App.css";
import calcPages from "./Utils/calcPages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/students"
          element={
            <Pagination
              students={students}
              title="Our Students"
              maxStudentsPerPage={MAX_STUDENTS_PER_PAGE}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
