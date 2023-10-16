import { useParams } from "react-router";
import "./index.css";
import db from "../../Database";



function AssignmentEdit() {

    const { courseId, assignmentId } = useParams();
    const assignments = db.assignments;
    const editing_assignment = assignments.find(
        (ass) => ass._id === assignmentId)

    
        
    

}

export default AssignmentEdit;