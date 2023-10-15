import './index.css';
import db from "../../Database";

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

export default AllModules;