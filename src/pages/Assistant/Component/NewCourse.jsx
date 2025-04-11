import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { AddCourseApi } from "../../../Store/Api/AssistantApi";

export default function CourseForm({ onClose }) {
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => AddCourseApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      toast.success("تم إضافة الدورة بنجاح");
      onClose();
    },
    onError: () => {
      toast.error("حدث خطأ أثناء إضافة الدورة");
    }}
  );
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageurl: "",
    price: 0,
    year: 6,
    startDate: "",
    endDate: ""
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick, true);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "year" ? Number(value) : value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("يرجى تحميل صورة فقط");
      return;
    }
    const timestamp = new Date().getTime();
    const uniqueFileName = `${timestamp}_${file.name}`;
    setFormData({ ...formData, imageurl: uniqueFileName, imageFile: file });
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleFileClick = () => fileInputRef.current.click();

  const removeImage = (e) => {
    e.stopPropagation();
    setImagePreview(null);
    setFormData({ ...formData, imageurl:"" });
    fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.imageFile || !formData.startDate || !formData.endDate) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    mutation.mutate(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-right mb-4">إضافة دورة جديدة</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="عنوان الدورة" required className="w-full p-2 border rounded" />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="وصف الدورة" required className="w-full p-2 border rounded" />
          <div className="text-right">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" required />
            {imagePreview ? (
              <div className="relative">
                <img src={imagePreview} alt="Preview" className="max-h-40 w-auto mx-auto" />
                <button type="button" onClick={removeImage} className="bg-red-500 text-white px-3 py-1 mt-2 rounded">حذف</button>
              </div>
            ) : (
              <button type="button" onClick={handleFileClick} className="border p-2 rounded w-full">إضافة صورة</button>
            )}
          </div>
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="السعر" required className="w-full p-2 border rounded" />
          <select name="year" value={formData.year} onChange={handleChange} required className="w-full p-2 border rounded">
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{`الصف ${i + 1}`}</option>
            ))}
          </select>
          <input type="datetime-local" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="datetime-local" name="endDate" value={formData.endDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">إلغاء</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">حفظ</button>
          </div>
        </form>
      </div>
    </div>
  );
}