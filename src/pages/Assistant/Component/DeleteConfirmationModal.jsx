import React from "react";

export default function DeleteConfirmationModal({ lesson, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-md w-full">
        <h4 className="text-[24px] text-center font-bold font-[Marhey] text-red-600 mb-4">
          تأكيد الحذف
        </h4>
        <p className="text-center mb-6">
          هل أنت متأكد من حذف الدرس "{lesson?.title}"؟
          <br />
          لا يمكن التراجع عن هذه العملية.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all w-1/2"
          >
            نعم، حذف
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all w-1/2"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}