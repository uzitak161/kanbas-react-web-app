import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaUserAlt, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaHistory, FaPhotoVideo, FaArrowCircleRight, FaQuestion } from 'react-icons/fa';


function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const link_icon_map = {
        "Account": <FaUserAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Dashboard": <FaTachometerAlt className="wd-nav-icon mb-2" size={"3em"} />,
        "Courses": <FaBook className="wd-nav-icon mb-2" size={"3em"} />,
        "Calendar": <FaCalendar className="wd-nav-icon mb-2" size={"3em"} />,
        "Inbox": <FaInbox className="wd-nav-icon mb-2" size={"3em"} />,
        "History": <FaHistory className="wd-nav-icon mb-2" size={"3em"} />,
        "Studio": <FaPhotoVideo className="wd-nav-icon mb-2" size={"3em"} />,
        "Commons": <FaArrowCircleRight className="wd-nav-icon mb-2" size={"3em"} />,
        "Help": <FaQuestion className="wd-nav-icon mb-2" size={"3em"} />
    }
    
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-navigation-bar position-fixed overflow-auto">
            <img src={require('./NU-logo.jpg')} className="wd-NU-logo" alt="NU-logo" />
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    style={{ borderRadius: "0px" }}
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