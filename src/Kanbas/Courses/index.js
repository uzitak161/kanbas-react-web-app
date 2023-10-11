import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div style={{ marginLeft: 104 }}>
      <h1>Course {course.name}</h1>
      <CourseNavigation />
    </div>
  );
}
export default Courses;