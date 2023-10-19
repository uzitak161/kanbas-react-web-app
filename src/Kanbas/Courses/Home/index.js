import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import RightSideBarButtons from "./RigeSideBarButtons";
import TopButtons from "./TopButtons";
import AllModules from "./AllModules"
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";




function Home() {


    const { courseId } = useParams();
    console.log(courseId === "RS101")
    const course = db.courses.find(
        (course) => course._id === courseId);


    return (
        <div>
            <div className="position-fixed d-none d-md-block">
                <Breadcrumb />
                <div className="position-fixed">
                    <CourseNavigation />
                    <div className="position-fixed bottom-0 end-0"
                        style={{
                            left: "320px",
                            top: "50px",
                        }}>
                        <div style={{ display: "flex", flex: "row" }}>

                            <div className="w-75">
                                <TopButtons />
                                <AllModules courseId={courseId} />
                            </div>
                            <RightSideBarButtons />
                        </div>
                    </div>
                </div>
            </div>


            <div className="position-fixed overflow-y-scroll d-md-none"
                style={{
                    left: "100px",
                    top: "40px",
                }}>
                <div style={{ display: "flex", flex: "row" }}>

                    <div className="w-75">
                        <TopButtons style={{marginLeft: (100 + 'px')}}/>
                        <AllModules courseId={courseId} />
                    </div>
                    <RightSideBarButtons />
                </div>
            </div>


        </div>

    )
}

export default Home;