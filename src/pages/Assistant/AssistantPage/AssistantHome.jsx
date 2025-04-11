import CourseCard from "../../Courses/component/CourseCard"
import PaymentAnalyticsDashboard from "../Component/PaymentAnalyticsDashBoard"
import StatusCards from "../Component/StatusCards"
const courses = [
  {
    id:1,
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
  },

  {
    id:2,
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
  },
  {
    id:3,
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
  }]
export default function AssistantHome() {
  return (
    <>
      <PaymentAnalyticsDashboard />
    </>
  )
}
