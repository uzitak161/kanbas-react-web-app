import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import RightSideBarButtons from "./RigeSideBarButtons";
import TopButtons from "./TopButtons";
import AllModules from "./AllModules"




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