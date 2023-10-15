import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import '../Home/index.css';
import TopButtons from "../Home/TopButtons";
import AllModules from "../Home/AllModules";

function Modules() {
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
        </div>

    )
}


export default Modules