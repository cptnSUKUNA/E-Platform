import React from "react";

export default function AdminControls({ onAddLesson, onRedirectToExam }) {
  return (
    <div className="max-w-[70%] bg-secondaryColor p-4 rounded-2xl shadow-custom mb-4 container">
      <h4 className="text-white text-[24px] text-center font-[Marhey] font-bold mb-4">
        لوحة التحكم
      </h4>
      <div className="flex gap-4 justify-center">
        <button 
          onClick={onAddLesson} 
          className="bg-mainColor font-[500] p-2 rounded-2xl text-[18px] font-[Marhey] text-white hover:bg-opacity-80 transition-all"
        >
          إضافة درس جديد
        </button>
        <button 
          onClick={onRedirectToExam} 
          className="bg-[rgb(0,147,208)] font-[500] p-2 rounded-2xl text-[18px] font-[Marhey] text-white hover:bg-opacity-80 transition-all"
        >
          الذهاب إلى الإختبار
        </button>
      </div>
    </div>
  );
}