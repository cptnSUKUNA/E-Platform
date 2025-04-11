import React from "react";

export default function LessonFormModal({ lessonData, isEditing, onChange, onSubmit, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-lg w-full">
        <h4 className="text-[24px] text-center font-bold font-[Marhey] text-secondaryColor mb-4">
          {isEditing ? 'تعديل الدرس' : 'إضافة درس جديد'}
        </h4>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">عنوان الدرس</label>
            <input
              type="text"
              name="title"
              value={lessonData.title}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">وصف الدرس</label>
            <textarea
              name="description"
              value={lessonData.description}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="3"
              required
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">رابط الفيديو</label>
            <input
              type="url"
              name="videoUrl"
              value={lessonData.videoUrl}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">رابط الملف PDF</label>
            <input
              type="url"
              name="pdfUrl"
              value={lessonData.pdfUrl}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isFree"
              checked={lessonData.isFree}
              onChange={onChange}
              className="w-4 h-4"
            />
            <label className="text-gray-700">درس مجاني</label>
          </div>
          
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-mainColor text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all w-1/2"
            >
              {isEditing ? 'حفظ التعديلات' : 'إضافة الدرس'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all w-1/2"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}