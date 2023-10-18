import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaRegAddressBook, FaRegCheckCircle, FaEllipsisV } from 'react-icons/fa';
import "./index.css"
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";


function TopButtons() {
  return (
    <div className="mb-3 wd-assignment-btn-grp mt-3">
      <div className="wd-ass-search-input">
        <input className="form-control wd-ass-search" placeholder="Search for Assignment" />
      </div>
      <div>
        <a href="#">
          <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
            type="button">
            <i className="fa-solid fa-plus"></i> Group
          </button>
        </a>
        <button className="btn btn-danger text-nowrap wd-top-home-button btn-sm" type="button">
          <i className="fa-solid fa-plus"></i> Assignment
        </button>
        <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
          type="button">
          <FaEllipsisV className="wd-color-black ms-0" />
        </button>
      </div>
    </div>
  );
}


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <Breadcrumb />
      <div>
        <CourseNavigation />
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <div className="w-75">
            <TopButtons />
            <hr />
            <ul className="list-group mt-4">
              <li className="list-group-item list-group-item-secondary">
                <div>
                  <span className="align-middle">
                    <b>Assignments</b>
                  </span>
                  <span className="float-end">
                    <button className="btn btn-light btn-outline-dark btn-sm rounded-left rounded-right">40% of Total</button>
                    <FaRegCheckCircle className="wd-assignment-icon ms-1" />
                    <FaEllipsisV className="wd-color-black ms-1" />
                  </span>
                </div>
              </li>
              {courseAssignments.map((assignment) => (

                <li className="wd-assignment list-group-item">

                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className=""
                  >

                    <div className="mt-3" style={{ float: "left", width: "3%" }}>
                      <FaRegAddressBook className="fas fa-book wd-assignment-icon" />
                    </div>

                    <div className="wd-assignment-name" style={{ float: "left", width: "75%" }}>
                      <a className="wd-thick" href="edit.html">{assignment.title}</a>
                      <p>
                        Week 0 - SETUP = Week starting on Monday September 5th |
                      </p>
                      <p> Due September 18, 2022 at 11:59pm | 100 pts</p>
                    </div>

                    <div className="float-end mt-3">
                      <FaRegCheckCircle className="wd-assignment-icon" />
                      <FaEllipsisV className="wd-color-black ms-1" />
                    </div>


                  </Link>
                </li>

              ))}
            </ul>
          </div >
        </div >
      </div >
    </div >
  );
}

// 
// style="float: left; width: 75%"
export default Assignments;