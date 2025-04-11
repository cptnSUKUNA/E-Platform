import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { GetCoursesApi } from "../../../Store/Api/CourseApi";

export default function CoursesTable() {
  const navigate = useNavigate();
  
  const { data: courses, isLoading, isError, error } = useQuery({
    queryKey: ["courses"],
    queryFn: () => GetCoursesApi(),
  });
  
  if (isLoading) {
    return <div className="w-full text-center py-8">جاري تحميل البيانات...</div>;
  }
  
  if (isError) {
    return <div className="w-full text-center py-8 text-red-600">حدث خطأ: {error.message}</div>;
  }
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      <table className="w-full text-lg text-right text-gray-700 dark:text-gray-300">
        <thead className="text-md text-white uppercase bg-[#025C74] dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-4">عنوان الدورة</th>
            <th scope="col" className="px-6 py-4">السعر</th>
            <th scope="col" className="px-6 py-4">السنة</th>
            <th scope="col" className="px-6 py-4">تاريخ البدء</th>
            <th scope="col" className="px-6 py-4">
              <span className="sr-only">عرض</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {courses && courses.map((course) => (
            <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all">
              <th scope="row" className="px-6 py-5 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                {course.title}
              </th>
              <td className="px-6 py-5 font-semibold text-[#025C74]">{course.price}</td>
              <td className="px-6 py-5">{course.year}</td>
              <td className="px-6 py-5">{course.startDate.split("T")[0]}</td>
              <td className="px-6 py-5 text-center">
                <button className="font-medium text-white bg-[#FAA147] hover:bg-[white] hover:text-[#FAA147] px-3 py-1 rounded-md transition-colors text-sm"
                  onClick={() => navigate(`/assistant/courses/${course.id}`)}
                >
                  عرض
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {courses && courses.length === 0 && (
        <div className="py-8 text-center">لا توجد دورات متاحة</div>
      )}
    </div>
  );
}