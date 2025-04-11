import { Link } from "react-router-dom";

const years = [
  {
    Title: "الصف الاول الثانوي",
    description: "محاضرات الصف الاول الثانوي",
    pathImg: "../../../../../src/assets/year1.svg",
    bg: "bg-[rgb(226,236,240)]",
  },
  {
    Title: "الصف الثاني الثاوي",
    description: "محاضرات الصف الثاني الثانوي",
    pathImg: "../../../../../src/assets/year3.svg",
    bg: "bg-[rgb(226,236,240)]",
  },
  {
    Title: "الصف الثالث الثانوي",
    description: "محاضرات الصف الثالث الثانوي",
    pathImg: "../../../../../src/assets/year2.svg",
    bg: "bg-[rgb(226,236,240)]",
  },
];

export default function YearCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {years.map((year, index) => {
          return (
            <Link
              to={`/courses/years/${index + 1}`}
              key={index}
              className={`relative border-2 border-black rounded-lg p-4 cursor-pointer
          ${year.bg} hover:shadow-custom transition-all dark:bg-secondaryColor dark:text-white group`}>
              <div>
                <h4 className="text-center font-bold text-secondaryColor dark:text-white font-[Marhey] text-[25px]">
                  {year.Title}
                </h4>
                <ul className="m-4">
                  <li className="list-disc text-[18px] font-[500]">
                    {year.description}
                  </li>
                </ul>
              </div>
              <div className="flex items-end justify-between">
                <img src={year.pathImg} alt="year-img" />
                <button className="shadow-custom p-4 rounded-2xl flex font-[Marhey] items-center">
                  المحاضرات
                  <img
                    src="../../../../../src/assets/arrow.svg"
                    className="w-[50px]"
                    alt=""
                  />
                </button>
              </div>
              <div
                className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-secondaryColor
            group-hover:w-full transition-all duration-300 ease-in-out group-hover:shadow-custom"></div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
