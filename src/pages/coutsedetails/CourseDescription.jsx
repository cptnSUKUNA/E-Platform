import { useParams } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
    details:
      "تغطي الدورة مجموعة من المواضيع المهمة مثل تحسين محركات البحث، التسويق عبر وسائل التواصل الاجتماعي، الإعلانات الممولة، والبريد الإلكتروني التسويقي.",
  },
  {
    id: 2,
    title: "دورة التصميم الجرافيكي",
    description:
      "تعلم أساسيات التصميم باستخدام برامج مثل Photoshop وIllustrator.",
    videoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "300",
    details:
      "تتضمن الدورة أساسيات التصميم، اختيار الألوان، تصميم الشعارات، وإنشاء التصاميم الجرافيكية الاحترافية.",
  },
  {
    id: 3,
    title: "دورة البرمجة",
    description: "ابدأ مسيرتك في البرمجة من الصفر مع هذه الدورة.",
    videoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "400",
    details:
      "تغطي الدورة لغات برمجية مثل Python وJavaScript، وكيفية إنشاء تطبيقات الويب.",
  },
];

export default function CourseDescription() {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-2xl font-bold text-red-500">لم يتم العثور على الدورة</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-[40px] font-bold text-secondaryColor text-center">
        {course.title}
      </h1>
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Details Section */}
        <div className="flex-1">
          <h2 className="text-[30px] font-bold text-secondaryColor">
            تفاصيل الدورة
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{course.details}</p>
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              مميزات الدورة :
            </h4>
            <ul className="list-none pr-4 text-gray-600 space-y-2">
              <li>إمكانية الوصول مدى الحياة للمحتوى</li>
              <li>تقييمات واختبارات دورية</li>
              <li>شهادات معتمدة عند الانتهاء</li>
              <li>دعم كامل من المدرب</li>
            </ul>
          </div>
          <h3 className="mt-8 text-[24px] font-bold text-secondaryColor">
            السعر:
            <span className="text-gray-800 dark:text-white">
              {" "}
              {course.price} ريال
            </span>
          </h3>
          <button className="mt-6 bg-secondaryColor text-white p-3 rounded-lg hover:bg-secondaryColor-dark transition-all">
            انضم الآن
          </button>
        </div>
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={course.videoUrl}
            alt={course.title}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
