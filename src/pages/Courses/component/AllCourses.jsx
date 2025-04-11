import React from "react";
import CourseCard from "./CourseCard"; 
const courses = [

    {
   
      title: "دورة التسويق الرقمي",
      description:
        "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
      videoUrl:"./src/assets/course_img.png",
      price: "250",
     
    },
    
    {
      
      title: "دورة التسويق الرقمي",
      description:
        "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
      videoUrl:"./src/assets/course_img.png",
      price: "250",
     
    },
    {
      
      title: "دورة التسويق الرقمي",
      description:
        "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
      videoUrl:"./src/assets/course_img.png",
      price: "250",
     
    },
    {
     
      title: "دورة التسويق الرقمي",
      description:
        "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
      videoUrl:"./src/assets/course_img.png",
      price: "250",
     
    },
    {
     
        title: "دورة التسويق الرقمي",
        description:
          "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
        videoUrl:"./src/assets/course_img.png",
        price: "250",
       
      }, {
     
        title: "دورة التسويق الرقمي",
        description:
          "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
        videoUrl:"./src/assets/course_img.png",
        price: "250",
       
      },
   
  
  
  
   
  ];
export default function AllCourses() {
  return (
    <section className="py-16 text-center">
    <div className="container mx-auto px-4">
      <h4 className="text-[40px] font-bold text-secondaryColor font-[Marhey]">جميع الدورات</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            videoUrl={course.videoUrl}
            price={course.price}
          />
        ))}
      </div>
    </div>
  </section>
  );
}
