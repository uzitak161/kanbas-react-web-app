import { useParams } from "react-router-dom";
import '../Home/index.css';
import TopButtons from "../Home/TopButtons";
import AllModules from "../Home/AllModules";
import Breadcrumb from "../CourseNavigation/breadcrumb";
import CourseNavigation from "../CourseNavigation";
import { useSelector, useDispatch } from "react-redux";
import {
    updateModule,
    addModule,
    setModule,
} from "./modulesReducer";


function Modules() {

    const { courseId } = useParams();
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch()

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
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text"
                                            value={module.name}
                                            onChange={(e) =>
                                                dispatch(setModule({ ...module, name: e.target.value }))}
                                            className="form-control"
                                            placeholder="Input Field" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <button onClick={() => dispatch(updateModule(module))} type="button" className="btn btn-info">Update</button>
                                        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} type="button" className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea
                                    value={module.description}
                                    onChange={(e) =>
                                        dispatch(setModule({ ...module, description: e.target.value }))}
                                    className="form-control" rows="4" placeholder="Text Area">
                                </textarea>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Modules