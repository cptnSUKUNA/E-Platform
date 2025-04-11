import SearchCompenet from "./SearchCompenet";
export default function StudentsHeader({toggleaddstudent}) {
  
  return (
    <>
        <div className="w-full flex flex-row justify-between items-center my-4">
            <div className="text-[30px] font-bold text-secondaryColor">
                الطلاب
            </div>
            <SearchCompenet />
            <button className="bg-secondaryColor text-white py-3 px-6 rounded-lg shadow-lg font-[600] hover:text-white transition duration-300" onClick={toggleaddstudent}>
                اضافة طالب
            </button>
        </div>

    </>

  )
}

