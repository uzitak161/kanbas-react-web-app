import { useParams } from "react-router-dom";
import db from "../../Database";
import '../Home/index.css';
import TopButtons from "../Home/TopButtons";
import AllModules from "../Home/AllModules";
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";


function Modules() {
    const { courseId } = useParams();
    console.log(courseId === "RS101")
    const course = db.courses.find(
        (course) => course._id === courseId);


    return (
        <div className="position-fixed">
            <Breadcrumb />
            <div className="position-fixed">
                <CourseNavigation />
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <div style={{ display: "flex", flex: "row" }}>

                        <div className="w-75">
                            <TopButtons />
                            <AllModules courseId={courseId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Modules