import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';


function TopButtons() {

    return (
        <><div className="wd-profile-summary float-end wd-top-home-button-group d-inline-flex p-2">
            <a href="#">
                <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
                    type="button">
                    Collapse All
                </button>
            </a>
            <a href="#">
                <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
                    type="button">
                    View Progress
                </button>
            </a>
            <div className="dropdown">
                <button className="btn btn-light btn-outline-dark dropdown-toggle btn-sm wd-top-home-button"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-regular fa-circle-check wd-color-green"></i> Publish All
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <button className="btn btn-danger text-nowrap wd-top-home-button btn-sm" type="button">
                <i className="fa-solid fa-plus"></i> Module
            </button>
            <button className="btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
                type="button">
            </button>

        </div><br /><br /><hr /><br /></>
    )
}


function AllModules({ courseId }) {
    console.log(courseId.toString() === "RS101")
    const modules = db.modules.filter(module => module.course === courseId)
    return (
        <div className="">
            <ul className="list-group">
                {modules.map((module, index) => (
                    <li key={index} className="list-group-item list-group-item-secondary my-5 border border-secondary rounded-0">
                        <div className="py-2">
                            {module.name}
                            <span className="float-end">
                                <i className="fa-regular fa-circle-check wd-color-green"></i>
                                <i className="fa-solid fa-ellipsis-vertical wd-vertical-ellipsis"></i>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )

}


function RightSideBarButtons() {
    return (
        <div class="float-end d-none d-xxl-block ms-3">
                        <h5>Course Status</h5>
                        <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                            type="button">Unpublish</button>
                        <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                            type="button">Published</button>
                        <br />
                        <br />

                        <ul class="list-group wd-sidebar-btns">
                            <li class="list-group-item">
                                <a href="#">
                                    <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                                        type="button">Import Existing Content</button>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">
                                    <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                                        type="button">Import From Commons</button>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">
                                    <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                                        type="button">Choose Home Page</button>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">
                                    <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">View
                                        Course Stream</button>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">
                                    <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">New
                                        Announcement</button>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">
                                    <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">New
                                        Analytics</button>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">
                                    <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">View
                                        Course Notifications</button>
                                </a>
                            </li>
                        </ul>

                        <h1>Comming Up</h1>
                        <a href="#">View Calendar</a>

                        <ul>
                            <li><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                            <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                            <li><a href="#">CS5610 06 SP23 LEcture Sep 11 at 6pm</a></li>
                        </ul>
                    </div>
    )
}


function Home() {


    const { courseId } = useParams();
    console.log(courseId === "RS101")
    const course = db.courses.find(
        (course) => course._id === courseId);


    return (
        <div style={{display: "flex" , flex: "row"}}>
            
            <div className="w-75">
            <TopButtons />
            <AllModules courseId={courseId} />
            </div>
            <RightSideBarButtons />
        </div>

    )
}

export default Home;