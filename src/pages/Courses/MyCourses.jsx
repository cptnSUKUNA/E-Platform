import { useEffect, useState } from "react";

import { GetStudentCourses } from "../../Store/Api/StudentApi";

export default function MyCourses() {
 const [course, setCourses] = useState([]);
  useEffect(() => {
    async function getCourses() {
      const data = await GetStudentCourses();
      setCourses(data);
      console.log(course)
    }

    getCourses();
  }, []);

  return (
    <div>MyCourses</div>
  )
}
