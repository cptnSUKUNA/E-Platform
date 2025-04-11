import SearchCompenet from "./SearchCompenet";

export default function AssistantCourseHeader({toggleaddcourse}) {
  return (
    <div className="w-full flex flex-row justify-between items-center my-4">
            <div className="text-[30px] font-bold text-secondaryColor">
                الدورات التعليمية   
            </div>
            <SearchCompenet />
            <div>
                <button className="bg-secondaryColor text-white py-3 px-6 rounded-lg shadow-lg font-[600] hover:text-white transition duration-300" onClick={toggleaddcourse}>
                    اضافة دورة تعليمية
                </button>
            </div>
    </div>
  )
}
