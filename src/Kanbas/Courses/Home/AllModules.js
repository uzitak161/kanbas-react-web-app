import './index.css';
import db from "../../Database";
import { FaRegAddressBook, FaRegCheckCircle, FaEllipsisV, FaPlus } from 'react-icons/fa';

function AllModules({ courseId }) {
    console.log(courseId.toString() === "RS101")
    const modules = db.modules.filter(module => module.course === courseId)
    return (
        <div className="">
            <ul className="list-group">
                {modules.map((module, index) => (
                    <li key={index} className="list-group-item list-group-item-secondary my-5 border border-secondary rounded-0">
                        <div className="py-2">
                            {module.name} - {module.description}
                            <span className="float-end">
                                <FaRegCheckCircle className='wd-color-green' />
                                <FaPlus className='ms-3' />
                                <FaEllipsisV className='ms-3'/>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default AllModules;