import { Link, useParams } from "react-router-dom";
import db from "../../Database";


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


function Home() {


    const { courseId } = useParams();
    console.log(courseId === "RS101")
    const course = db.courses.find(
        (course) => course._id === courseId);


    return (
        <div className="w-75">
            <TopButtons />
            <AllModules courseId={courseId} />
        </div>

    )
}

export default Home;