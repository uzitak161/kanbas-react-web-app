import './index.css';
import { FaRegCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import {
    deleteModule,
    setModule,
} from "../Modules/modulesReducer";

function AllModules({ courseId }) {
    const dispatch = useDispatch();
    const modules = useSelector((state) => state.modulesReducer.modules).filter(module => module.course === courseId);
    
    return (
        <div className="">
            <ul className="list-group">
                {modules.map((module, index) => (
                    <li key={index} className="list-group-item list-group-item-secondary my-5 border border-secondary rounded-0">
                        <div className="py-2">
                            {module.name} - {module.description}
                            <span className="float-end mb-1">
                                <FaRegCheckCircle className='wd-color-green' />
                                <button className="btn btn-danger ms-2" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                                <button className="btn btn-secondary ms-1" onClick={() => dispatch(setModule(module))}>Edit</button>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default AllModules;