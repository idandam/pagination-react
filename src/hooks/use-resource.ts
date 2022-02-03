import { useEffect, useState } from "react";

import StudentModel from "../models/StudentModel";

import STUDENTS_RESOURCE from "../constants/studentsResource";

const useResource = () => {
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // There's only an error for the http get request for the students resource,
  // since it' a mock. However, in real projects we need to check additional
  // errors that can happen in another scenario, (e.g., response.ok )
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isLoading) {
      let tid = setTimeout(() => {
        setIsError(true);
      }, 8000);

      return () => {
        clearTimeout(tid);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    // I could've put it inside the else statement, but for the sake of completeness...
    setIsLoading(true);

    const students = localStorage.getItem("students");
    if (students && students !== "[]") {
      setStudents(JSON.parse(students));
      setIsLoading(false);
    } else {
      fetch(STUDENTS_RESOURCE)
        .then((response) => response.json())
        .then((result) => {
          setStudents(result.data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return { students, setStudents, isLoading, isError };
};

export default useResource;
