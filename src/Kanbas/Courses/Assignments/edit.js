import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import db from "../../Database";
import "./index.css"


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
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;