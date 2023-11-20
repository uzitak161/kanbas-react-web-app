import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css"
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, selectAssignment, setAssignments, updateAssignment } from "./assignmentsReducer";
import { useLocation } from "react-router-dom";
import * as client from "./client";
import { findAssignmentsForCourse } from "./client";


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
      client.createAssignment({ ...assignment, course: courseId }).then((assignment) => {
        dispatch(addAssignment({ ...assignment, course: courseId }));
      });
    } else {
      client.updateAssignment(assignment).then((assignment) => {
        dispatch(updateAssignment(assignment));
      });
    }
    const newAssignments = findAssignmentsForCourse(courseId);
    setAssignments(newAssignments);
    selectAssignment({})
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

            <div>
              <label for="points-inpt" className="form-label">Points</label>
              <input
                value={assignment.points}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
                id="points-inpt"
                type="number"
                className="form-control w-25" />
              <br />
              <label for="due-date-inpt" className="form-label">Due Date</label>
              <input
                value={assignment.dueDate}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
                id="due-date-inpt"
                type="date"
                className="form-control w-50" />
              <br />

              <label for="available-from-date" className="form-label">Available-From</label>
              <input
                value={assignment.availableFromDate}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
                id="available-from-date"
                type="date"
                className="form-control w-50" />
              <br />

              <label for="available-to-date" className="form-label">Available-To</label>
              <input
                value={assignment.availableToDate}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableToDate: e.target.value }))}
                id="available-to-date"
                type="date"
                className="form-control w-50" />
              <br />


            </div>

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