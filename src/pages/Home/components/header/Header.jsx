import { Link } from "react-router-dom";
import Styles from "./../../Home.module.css";
import imgHome from "../../../../assets/imgHome.png";
const { title } = Styles;

export default function Header() {
  return (
    <div>
      {" "}
      <section className="flex h-auto bg-cover bg-center  items-center justify-between  ">
        <div className="container mx-auto flex flex-col">
          <div className="max-w-2xl">
            <h1
              className={`text-gray-700  dark:text-white text-[50px] font-bold leading-tight mb-4 ${title}`}>
              مرحباً بكم في منصه
              <span className="text-secondaryColor px-2 inline-block">
                الشاطر
              </span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-6 dark:text-white">
              نقدم لكم أفضل الموارد التعليمية المبتكرة لتعزيز مستوى تعلمكم. مع
              منصتنا، التعليم يصبح أسهل وأكثر متعة.{" "}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-secondaryColor text-white py-3 px-6 rounded-lg shadow-lg font-[600] hover:text-white transition duration-300">
                <Link to="/login">انضم لنا الان</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={imgHome} alt="not found" className="w-[500px]" />
        </div>
      </section>
    </div>
  );
}
