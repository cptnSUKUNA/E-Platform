import { FaUsers} from "react-icons/fa";
import { FaBook, FaMoneyBill } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "الطلاب النشطين", value: "1,245", icon: <FaUsers />, route: "/assistant/students" },
  { label: "كورساتنا الحاليه", value: "320", icon: <FaBook />, route: "/assistant/courses" },
  { label: "المدفوعات", value: "500000$", icon: <FaMoneyBill />, route: "/assistant/payments" },
];

export default function StatusCards() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-3 gap-6 p-6  ">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="relative bg-gray-200 p-6 rounded-2xl 
           text-center flex flex-col items-center transition-transform duration-300 hover:scale-105  cursor-pointer"
          onClick={() => navigate(stat.route)}
        >
          <div className="text-4xl text-[#FAA147] mb-3">{stat.icon}</div>
          <p className="text-md font-semibold text-[#02495D]">{stat.label}</p>
          <p className="text-4xl font-extrabold mt-2 text-[#02495D]">{stat.value}</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-50 animate-loading" />
        </div>
      ))}
    </div>
  );
}
