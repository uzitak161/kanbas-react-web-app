import './index.css';
import RightSideBarButtons from "./RigeSideBarButtons";
import TopButtons from "./TopButtons";
import AllModules from "./AllModules"
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";




function Home() {

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
                                <AllModules />
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
                        <TopButtons />
                        <AllModules />
                    </div>
                    <RightSideBarButtons />
                </div>
            </div>


        </div>

    )
}

export default Home;