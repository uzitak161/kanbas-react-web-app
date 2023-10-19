import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";


function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();

  const pathname = useLocation();

  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  console.log(assignmentId)
  console.log(pathname)


  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <Breadcrumb />
      <div>
        <CourseNavigation />
        <div className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}>
          <h2>Assignment Name</h2>
          <input value={assignment.title}
            className="form-control mb-2" />
          <hr />
          <div className="float-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger">
              Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">
              Save
            </button>
          </div>

        </div>
      </div>
    </div>

  );
}


export default AssignmentEditor;