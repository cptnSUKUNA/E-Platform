import CourseForm from "../Component/NewCourse";
import AssistantCourseHeader from "../Component/AssistantCourseHeader";
import { useState } from "react";
import CoursesTable from "../Component/CoursesTable";

export default function AssistantCourse() {
  const [showaddcourse, setshowaddcourse] = useState(false);

  return (
    <>
        <AssistantCourseHeader toggleaddcourse={() => setshowaddcourse(!showaddcourse)}/>
        {showaddcourse && <CourseForm onClose={() => setshowaddcourse(false)}/>}
        <CoursesTable/>
    </>
  )
}
