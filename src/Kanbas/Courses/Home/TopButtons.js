import './index.css';
import { FaRegCheckCircle, FaEllipsisV } from 'react-icons/fa';

function TopButtons() {

    return (
        <><div className="wd-profile-summary float-end wd-top-home-button-group p-2">

            <button className="btn btn-light btn-outline-dark text-nowrap btn-sm"
                type="button">
                Collapse All
            </button>


            <button className="btn btn-light btn-outline-dark text-nowrap btn-sm"
                type="button">
                View Progress
            </button>

            <div className="dropdown">
                <button className="btn btn-light btn-outline-dark dropdown-toggle btn-sm wd-top-home-button"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-regular fa-circle-check wd-color-green"></i> <FaRegCheckCircle className='pb-1 me-1 wd-color-green'/>Publish All
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            {/* <button className="btn btn-danger text-nowrap wd-top-home-button btn-sm" type="button">
                <i className="fa-solid fa-plus"></i>  + Module
            </button> */}
            <button className="wd-settings-button btn btn-light btn-outline-dark text-nowrap wd-top-home-button btn-sm"
                type="button">
                    <FaEllipsisV className="pe-2 pb-1" /> 
            </button>

        </div><br /><br /><hr /><br /></>
    )
}

export default TopButtons;

