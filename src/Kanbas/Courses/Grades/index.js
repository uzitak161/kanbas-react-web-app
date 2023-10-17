import { useParams } from "react-router-dom";
import db from "../../Database";
import "../Home/index.css";
import "./index.css"
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";


function Grades() {
    const { courseId } = useParams();

    console.log(db.enrollments)

    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);


    function TopButtonGroup() {

        return (
            <div>
                <div className="">
                    <div className="my-3 wd-top-home-button-group wd-assignment-btn-grp">
                        <a href="#">
                            <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
                                type="button">
                                <i className="fas fa-file-import"></i> Import
                            </button>
                        </a>
                        <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm" type="button">
                            <i className="fas fa-file-export"></i> Export
                        </button>
                        <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
                            type="button">
                            <i className="fas fa-cog"></i>
                        </button>
                    </div>
                </div>
                <br />

                <form>
                    <div className="row mt-0">
                        <div className="col-6" style={{ textalign: "left" }}>
                            <label className="form-check-label" for="student-search">Student Names</label>
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" for="ass-search">Asssignment Names</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6" style={{ textalign: "left" }}>
                            {/* Taken from stackoverflow  https://stackoverflow.com/questions/19350291/use-font-awesome-icon-in-placeholder */}
                            <input type="text" id="student-search" class="form-control" placeholder="&#xF002; Search Students" /><br />
                        </div>
                        <div class="col-6">
                            <input type="text" id="ass-search" class="form-control" placeholder="&#xF002; Search Assignments" /><br />
                        </div>
                    </div>

                    <button type="button" className="btn btn-light btn-outline-dark text-nowrap"><i class="fas fa-filter"></i>Apply
                        Filters</button>

                </form>
            </div>
        )
    }

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
                        <TopButtonGroup />
                        <div className="mt-3 table-responsive-xl">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <th >Student Name</th>
                                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                                </thead>
                                <tbody className="wd-centered-table-col">
                                    {enrollments.map((enrollment) => {
                                        const user = db.users.find((user) => user._id === enrollment.user);
                                        return (
                                            <tr>
                                                <td>{user.firstName} {user.lastName}</td>
                                                {assignments.map((assignment) => {
                                                    const grade = db.grades.find(
                                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                                    return (<td>{grade?.grade || ""}</td>);
                                                })}
                                            </tr>);
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default Grades;