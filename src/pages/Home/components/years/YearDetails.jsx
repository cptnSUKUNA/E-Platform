import React from "react";
import { Link, useParams } from "react-router-dom";
const yearData = [
  {
    id: 1,
    Title: "الصف الاول الثانوي",
    description: "وصف للسنة الأولى مع التفاصيل.",
    courses: [
      {
        title: "دورة HTML",
        description: "تعلم أساسيات HTML.",
        duration: "10 ساعات",
      },
      {
        title: "دورة CSS",
        description: "تعلم تصميم المواقع باستخدام CSS.",
        duration: "15 ساعات",
      },
      {
        title: "دورة CSS",
        description: "تعلم تصميم المواقع باستخدام CSS.",
        duration: "15 ساعات",
      },
      {
        title: "دورة CSS",
        description: "تعلم تصميم المواقع باستخدام CSS.",
        duration: "15 ساعات",
      },
    ],
  },
  {
    id: 2,
    Title: "الصف الثاني الثاوي",
    description: "وصف للسنة الثانية مع التفاصيل.",
    courses: [
      {
        title: "دورة JavaScript",
        description: "تعلم JavaScript من الصفر.",
        duration: "20 ساعات",
      },
      {
        title: "دورة React",
        description: "أساسيات بناء التطبيقات بـ React.",
        duration: "25 ساعات",
      },
      {
        title: "دورة React",
        description: "أساسيات بناء التطبيقات بـ React.",
        duration: "25 ساعات",
      },
      {
        title: "دورة React",
        description: "أساسيات بناء التطبيقات بـ React.",
        duration: "25 ساعات",
      },
    ],
  },
  {
    id: 3,
    Title: "الصف الثالث الثانوي",
    description: "وصف للسنة الثالثة مع التفاصيل.",
    courses: [
      {
        title: "دورة Node.js",
        description: "تعلم تطوير الواجهات الخلفية.",
        duration: "30 ساعات",
      },
      {
        title: "دورة MongoDB",
        description: "تعلم قواعد البيانات MongoDB.",
        duration: "18 ساعات",
      },
      {
        title: "دورة MongoDB",
        description: "تعلم قواعد البيانات MongoDB.",
        duration: "18 ساعات",
      },
      {
        title: "دورة MongoDB",
        description: "تعلم قواعد البيانات MongoDB.",
        duration: "18 ساعات",
      },
    ],
  },
];
export default function YearDetails() {
  const { yearId } = useParams(); // Extract the yearId from the URL
  const year = yearData.find((item) => item.id === parseInt(yearId)); // Find year data based on the ID
  if (!year) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-2xl font-bold text-red-500">لم يتم العثور على                   المحاضرات
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center font-bold text-secondaryColor dark:text-white font-[Marhey] text-[25px]">
          {year.Title}
        </h1>
        <p className="mt-4 text-[18px] font-[500] text-black dark:text-white">
          {year.description}
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {year.courses.map((course, index) => (
            <div
              key={index}
              className="border-2  shadow-lg bg-white  border-black rounded-lg p-4 cursor-pointer
    hover:shadow-custom transition-all dark:bg-secondaryColor dark:text-white group"
            >
              <h3 className="font-bold text-[20px] text-center text-secondaryColor dark:text-white">
                {course.title}
              </h3>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <p className="mt-2 text-black dark:text-white ">
                {course.description}
              </p>
              <p className="mt-4 text-base text-gray-950 dark:text-mainColor">
                المدة: {course.duration}
              </p>
              <button className="shadow-custom p-4 rounded-2xl flex font-[Marhey] mt-2 ">
                <Link>التفاصيل</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
