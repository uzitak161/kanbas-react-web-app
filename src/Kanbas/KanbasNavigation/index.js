import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaUserAlt } from 'react-icons/fa';


function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const link_icon_map = {
        "Account": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Dashboard": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Courses": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Calendar": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Inbox": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "History": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Studio": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Commons": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Help": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />
    }
    
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-navigation-bar position-absolute">
            <img src={require('./NU-logo.jpg')} className="wd-NU-logo" alt="NU-logo" />
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item wd-navigation-bar-item ${pathname.includes(link) && "active"}`}
                >
                    {link_icon_map[link]}
                    {link}
                </Link>
            ))}
        </div>
    );

}
export default KanbasNavigation;