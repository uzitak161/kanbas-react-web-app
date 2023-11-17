
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules"
import Assignments from "./Assignments"
import AssignmentEdit from "./Assignments/edit";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {

  const { courseId } = useParams();

  const URL = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, []);

  return (
    <div style={{ marginLeft: 104 }} className="w-100">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEdit />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
  );
}

export default Courses;

