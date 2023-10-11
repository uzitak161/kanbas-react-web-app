import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <div className="list-group col-11 wd-dash-summary" style={{ marginLeft: 104 }}>
                <h1>Dashboard</h1>
                <hr />
                <h3>Published Courses</h3>
                <hr />

                <div class="d-flex flex-row flex-wrap wd-card-container ">

                    {courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card" style={{ width: 270 }}>
                            <img class="card-img-top" src={require("./banner.png")} alt="Card img"></img>
                            <div class="card-body">
                                <h6 class="card-title">{course.number} {course.name}</h6>
                                <p class="card-text">{course.number} {course._id} {course.startDate}</p>
                                <span class="card-text wd-secondary-card-text">{course.startDate} - {course.endDate}</span>
                            </div>
                        </Link>
                    ))}

                </div>


            </div>
        </div>
    );
}
export default Dashboard;





{/* <div class="col-11 wd-dash-summary">
                <h1>Dashboard</h1>
                <hr />
                <h3>Published Courses</h3>
                <hr />

                <div class="d-flex flex-row flex-wrap wd-card-container ">

                    <div class="card" style="width: 270px;">
                        <img class="card-img-top" src="banner.png" alt="Card image cap">
                        <a href="../home.html">
                            <div class="card-body">
                                <h6 class="card-title">CS4550 12631 Web Development</h6>
                                <p class="card-text">CS4550.12631.202410</p>
                                <span class="card-text wd-secondary-card-text">202410_1 Fall 2023 Semester Full
                                    Term</span>
                            </div>
                        </a>
                    </div>

                    <div class="card" style="width: 270px;">
                        <img class="card-img-top" src="banner.png" alt="Card image cap">
                        <a href="../home.html">
                            <div class="card-body">
                                <h6 class="card-title">CS4550 12631 Web Development</h6>
                                <p class="card-text">CS4550.12631.202410</p>
                                <span class="card-text wd-secondary-card-text">202410_1 Fall 2023 Semester Full
                                    Term</span>
                            </div>
                        </a>
                    </div>

                    <div class="card" style="width: 270px;">
                        <img class="card-img-top" src="banner.png" alt="Card image cap">
                        <a href="../home.html">
                            <div class="card-body">
                                <h6 class="card-title">CS4550 12631 Web Development</h6>
                                <p class="card-text">CS4550.12631.202410</p>
                                <span class="card-text wd-secondary-card-text">202410_1 Fall 2023 Semester Full
                                    Term</span>
                            </div>
                        </a>
                    </div>

                    <div class="card" style="width: 270px;">
                        <img class="card-img-top" src="banner.png" alt="Card image cap">
                        <a href="../home.html">
                            <div class="card-body">
                                <h6 class="card-title">CS4550 12631 Web Development</h6>
                                <p class="card-text">CS4550.12631.202410</p>
                                <span class="card-text wd-secondary-card-text">202410_1 Fall 2023 Semester Full
                                    Term</span>
                            </div>
                        </a>
                    </div>

                    <div class="card" style="width: 270px;">
                        <img class="card-img-top" src="banner.png" alt="Card image cap">
                        <a href="../home.html">
                            <div class="card-body">
                                <h6 class="card-title">CS4550 12631 Web Development</h6>
                                <p class="card-text">CS4550.12631.202410</p>
                                <span class="card-text wd-secondary-card-text">202410_1 Fall 2023 Semester Full
                                    Term</span>
                            </div>
                        </a>
                    </div>

                    <div class="card" style="width: 270px;">
                        <img class="card-img-top" src="banner.png" alt="Card image cap">
                        <a href="../home.html">
                            <div class="card-body">
                                <h6 class="card-title">CS4550 12631 Web Development</h6>
                                <p class="card-text">CS4550.12631.202410</p>
                                <span class="card-text wd-secondary-card-text">202410_1 Fall 2023 Semester Full
                                    Term</span>
                            </div>
                        </a>
                    </div>

                    <div class="card" style="width: 270px;">
                        <img class="card-img-top" src="banner.png" alt="Card image cap">
                        <a href="../home.html">
                            <div class="card-body">
                                <h6 class="card-title">CS4550 12631 Web Development</h6>
                                <p class="card-text">CS4550.12631.202410</p>
                                <span class="card-text wd-secondary-card-text">202410_1 Fall 2023 Semester Full
                                    Term</span>
                            </div>
                        </a>
                    </div>


                </div>
            </div> */}