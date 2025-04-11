import Register from "../../Register/Register";
import StudentsHeader from "../Component/StudentsHeader";
import StudentTables from "../Component/StudentTables";
import { useState } from "react";

export default function AssistantStudents() {
  const [showaddstudent, setShowAddStudent] = useState(false);
  return (
    <div className="w-full h-full overflow-y-scroll p-6 flex flex-row flex-wrap justify-center content-start">
        
        <StudentsHeader toggleaddstudent={() => setShowAddStudent(!showaddstudent)}/>
        {showaddstudent && <Register/>}
        <StudentTables/>
        
    </div>
  )
}
