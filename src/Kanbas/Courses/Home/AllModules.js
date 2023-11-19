import './index.css';
import { FaRegCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    deleteModule,
    setModule,
    setModules,
} from "../Modules/modulesReducer";
import { findModulesForCourse } from '../Modules/client';
import { useEffect } from 'react';
import * as client from '../Modules/client';

function AllModules() {

    const dispatch = useDispatch();

    const { courseId } = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    


    const modules = useSelector((state) => state.modulesReducer.modules).filter(module => module.course === courseId);
    return (
        <div className="">
            <ul className="list-group">
                {modules.map((module, index) => (
                    <li key={index} className="list-group-item list-group-item-secondary my-5 border border-secondary rounded-0">
                        <div className="py-2">
                            {module.name} - {module.description}
                            <span className="float-end">
                                <FaRegCheckCircle className='wd-color-green' />
                                <FaTrashAlt onClick={() => handleDeleteModule(module._id)} className='ms-3' style={{ color: 'red' }} />
                                <FaEdit onClick={() => dispatch(setModule(module))} className='ms-3' />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default AllModules;