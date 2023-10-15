import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Breadcrumb from "./CourseNavigation/breadcrumb";
import Modules from "./Modules"

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div style={{ marginLeft: 104 }} className="w-100">
      <Breadcrumb />
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
              <Route path="Assignments" element={<h1>Assignments</h1>} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

