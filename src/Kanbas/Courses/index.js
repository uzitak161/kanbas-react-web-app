
import CourseNavigation from "./CourseNavigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Breadcrumb from "./CourseNavigation/breadcrumb";
import Modules from "./Modules"
import Assignments from "./Assignments"
import AssignmentEdit from "./Assignments/edit";
import Grades from "./Grades";

function Courses() {
  return (
    <div style={{ marginLeft: 104 }} className="w-100">
      {/* <Breadcrumb /> */}
      <div>
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "320px",
              top: "50px",
            }}
          >
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
            <Breadcrumb />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

