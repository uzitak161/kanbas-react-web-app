
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules"
import Assignments from "./Assignments"
import AssignmentEdit from "./Assignments/edit";
import Grades from "./Grades";



function Courses() {
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

