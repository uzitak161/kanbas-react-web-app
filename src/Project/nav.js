import { Link, useLocation } from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();

    return (
        <div className="list-group m-2">
            <Link to="/project/home"
                className={`list-group-item nav-link ${pathname.includes("project/home") ? "active" : ""}`}>Home</Link>
            <Link to="/project/search"
                className={`nav-link list-group-item ${pathname.includes("project/search") ? "active" : ""}`}>Search</Link>
            <Link to="/project/signin"
                className={`nav-link list-group-item ${pathname.includes("project/signin") ? "active" : ""}`}>Sign-in</Link>
            <Link to="/project/signup"
                className={`nav-link list-group-item ${pathname.includes("project/signup") ? "active" : ""}`}>Sign-up</Link>
            <Link to="/project/account"
                className={`nav-link list-group-item ${pathname.includes("project/account") ? "active" : ""}`}>Account</Link>
        </div>
    );
}
export default Nav;