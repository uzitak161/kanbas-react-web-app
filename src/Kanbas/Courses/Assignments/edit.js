import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css"
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, selectAssignment, updateAssignment } from "./assignmentsReducer";
import { useLocation } from "react-router-dom";


function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch()
  const { pathname } = useLocation();

  selectAssignment({ _id: assignmentId })


  const navigate = useNavigate();
  const handleSave = () => {
    if (pathname.includes("new")) {
      console.log("NEW")
      console.log(assignment)
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment(assignment));
    }   
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
          <div className="w-50 form=group">
            <h2>Assignment Name</h2>
            <input value={assignment.title}
              onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
              className="form-control mb-2" />
            <textarea
              value={assignment.description}
              onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
              className="form-control"
            ></textarea>
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
    </div>

  );
}


export default AssignmentEditor;