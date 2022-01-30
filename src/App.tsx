import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";
import StudentModel from "./models/StudentModel";
import { MAX_STUDENTS_PER_PAGE } from "./constants/constants";
import StudentDetailsWrapper from "./components/Students/StudentDetailsWrapper";
import "./App.css";
import Header from "./components/Header/Header";
import canEdit from "./Utils/canEdit";
import Footer from "./components/Footer/Footer";
import getPage from "./Utils/getPage";
import Message from "./components/UI/Message";

function App() {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3500);
    }
  }, [isSubmitted]);

  useEffect(() => {
    const students = localStorage.getItem("students");
    if (students && students !== "[]") {
      setStudents(JSON.parse(students));
    } else {
      fetch("https://run.mocky.io/v3/00c7dbe8-7e51-41af-bf1c-05a4a60fa47c")
        .then((response) => response.json())
        .then((result) => {
          setStudents(result.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

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
      // which means that we're not in edit mode
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

  const studentUpdatedHandler = (updatedStudent: StudentModel): void => {
    setStudents((students) => {
      const position = students.findIndex(
        (student) => student.id === updatedStudent.id
      );
      // The student indeed exist, otherwise we have been referenced to another page.
      const updatedStudents = [...students];
      updatedStudents[position] = updatedStudent;
      setCurrPage(getPage(position, MAX_STUDENTS_PER_PAGE));
      setIsSubmitted(true);
      navigate("/students");
      return updatedStudents;
    });
  };

  /**
   *
   * @param value an offset to the current page if @var {isOffset} is true,
   * else, the number of the page.
   * @param isOffset  true if @var {value} is an offset to the current page, false otherwise.
   */
  const pageChangeHandler = (value: number, isOffset?: boolean): void => {
    setCurrPage((page) => {
      if (isOffset) {
        return page + value;
      }
      return value;
    });
  };

  return (
    <div className="app-container">
      <Header
        canEdit={canEdit(location.pathname, students.length)}
        isInEditMode={isInEditMode}
        canDelete={selected.length > 0}
        onEditClick={editModeHandler}
        onDeleteClick={deleteStudentsHandler}
        showSavedMessage={isSubmitted}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/students" />} />
        <Route
          path="students"
          element={
            students.length > 0 ? (
              <Pagination
                students={students}
                title="Our Students"
                maxStudentsPerPage={MAX_STUDENTS_PER_PAGE}
                isInEditMode={isInEditMode}
                onStudentClick={studentClickHandler}
                onPageChange={pageChangeHandler}
                currPage={currPage}
              />
            ) : (
              <Message message="No students" />
            )
          }
        />
        <Route
          path="students/:studentId"
          element={
            <StudentDetailsWrapper
              students={students}
              onUpdateStudent={studentUpdatedHandler}
            />
          }
        />
        <Route
          path="*"
          element={
            <Message message="The page you are looking for does not exist" />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
