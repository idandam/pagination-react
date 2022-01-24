import React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import students from "./models/students";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="students" />
      </Routes>
    </div>
  );
}

export default App;
