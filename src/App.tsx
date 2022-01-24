import React from "react";
// import { Switch, useParams } from "react-router-dom";
import Students from "./components/Students";
import students from "./models/students";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Students students={students} />
    </div>
  );
}

export default App;
