import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import "./index.css";


function Dashboard() {

    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });


    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime() }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };


    return (
        <div className="col-11 wd-dash-summary" style={{ marginLeft: 104 }}>
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button onClick={addNewCourse} >
                Add
            </button>
            <button onClick={updateCourse} >
                Update
            </button>


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
