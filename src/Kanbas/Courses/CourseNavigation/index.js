import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-course-navigator d-none d-md-block" style={{ width: 150}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          style={{ borderRadius: "0px" }}
          className={`list-group-item wd-course-navigation-option ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;