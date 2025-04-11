import React from "react";

export default function LessonItem({ lesson, onEdit, onDelete }) {
  return (
    <div className="py-4 bg-secondaryColor flex justify-between items-center border-b border-gray-200">
      <div>
        <h5 className="text-lg font-semibold text-white ">{lesson.title}</h5>
        <p className="text-white text-sm line-clamp-1">{lesson.description}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`px-2 py-1 rounded-full text-xs ${lesson.isFree ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
            {lesson.isFree ? 'مجاني' : 'مدفوع'}
          </span>
          <span className="text-white text-xs">
            {new Date(lesson.createdAt).toLocaleDateString('ar-EG')}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => onEdit(lesson)}
          className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition-all"
        >
          تعديل
        </button>
        <button 
          onClick={() => onDelete(lesson)}
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all"
        >
          حذف
        </button>
      </div>
    </div>
  );
}