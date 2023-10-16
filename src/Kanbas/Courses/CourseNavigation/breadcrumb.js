import { Link, useLocation, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"


function GenerateBreadcrumb() {

    // Make a regex pattern to match for a case like (path/Assignments/*)
    const pattern = /Assignments\/.*/;
    const { courseId } = useParams();


    const { pathname } = useLocation();

    if (pattern.test(pathname)) {
        return (
            <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                style={{ textDecoration: "none", display: "flex", flexDirection: "row" }} className="mt-2">
                <li className="breadcrumb-item"> <span className="wd-no-text-decorations"> &gt; </span>Assignments</li>
            </Link>
        )

    } else if (pathname.includes("Home")) {
        return (<li className="breadcrumb-item active mt-2 ps-2" aria-current="page"> &gt; Home</li>)
    } else if (pathname.includes("Modules")) {
        return (<li className="breadcrumb-item active mt-2 ps-2" aria-current="page"> &gt; Modules</li>)
    } else if (pathname.includes("Assignments")) {
        return (<li className="breadcrumb-item active mt-2 ps-2" aria-current="page"> &gt; Assignments</li>)
    } else if (pathname.includes("Grades")) {
        return (<li class="breadcrumb-item active mt-2 ps-2" aria-current="page"> &gt; Grades</li>)
    }
}



function Breadcrumb() {

    const { courseId } = useParams();

    return (
        <div className="w-100">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">

                    <Link
                        to={`/Kanbas/Courses/${courseId}/Home`}
                        style={{ textDecoration: "none", display: "flex", flexDirection: "row" }} className="mt-2">
                        <li className="breadcrumb-item">{courseId}</li>
                    </Link>
                    <GenerateBreadcrumb />
                </ol> {/* Add closing tag for ol element */}
            </nav>
            <hr />
        </div>
    );
}
export default Breadcrumb;