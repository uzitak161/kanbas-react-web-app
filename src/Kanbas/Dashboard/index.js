import { Link } from "react-router-dom";
import { React, useState } from "react";
import "./index.css";


function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }

) {
    console.log(courses)


    return (
        <div className="col-11 wd-dash-summary" style={{ marginLeft: 104 }}>
            <h1>Dashboard</h1>
            <hr />
            <h5>Published Courses ({courses.length})</h5>
            <hr />
            <div className="w-50 border rounded mb-4">
                <input value={course.name} className="form-control my-3 w-75"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control my-3 w-50"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control my-3 w-50" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control my-3 w-50" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <button className="btn btn-success m-2" onClick={addNewCourse} >
                    Add
                </button>
                <button className="btn btn-primary m-2" onClick={updateCourse} >
                    Update
                </button>
            </div>


            <div className="d-flex flex-row flex-wrap wd-card-container ">

                <div className="list-group w-75">
                    {courses.map((course) => (
                        <Link key={course._id}
                            to={`/Kanbas/Courses/${course._id}`}
                            className="list-group-item">
                            {course.name}
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}
                                className="btn btn-danger float-end ms-3">
                                Delete
                            </button>
                            <button onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}
                                className="btn btn-secondary float-end">
                                Edit
                            </button>
                        </Link>
                    ))}
                </div>


            </div>
        </div>
    );
}
export default Dashboard;
