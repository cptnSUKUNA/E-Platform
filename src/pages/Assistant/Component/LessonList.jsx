import React from "react";
import LessonItem from "./LessonItem";

export default function LessonsList({ lessons, onEdit, onDelete }) {
  return (
    <div className="max-w-[70%] bg-secondaryColor p-4 rounded-2xl shadow-custom mb-4 container">
      <h4 className="text-white text-[24px] text-center font-[Marhey] font-bold mb-4">
        إدارة الدروس
      </h4>
      <div className="bg-white rounded-xl">
        {lessons.length > 0 ? (
          <div className="">
            {lessons.map((lesson) => (
              <LessonItem 
                key={lesson.id} 
                lesson={lesson} 
                onEdit={onEdit} 
                onDelete={onDelete} 
              />
            ))}
          </div>
        ) : (
          <p className="text-center py-4 text-gray-500">لا توجد دروس حاليًا</p>
        )}
      </div>
    </div>
  );
}