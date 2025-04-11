import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { IoMdLogIn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../Store/Slices/AuthSlice";
import { removeprofile } from "../Store/Slices/ProfileSlice";
import { removecourses } from "../Store/Slices/MyCoursesSlice";
import { decodeJWT } from "./AssistantProtectedRoute";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBorder, setHasBorder] = useState(false);
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.auth.authmodel?.token);
  const navigate = useNavigate();
  console.log(Auth);
  const role = Auth ? decodeJWT(Auth).role : ""; 
  const handleLogout = () => {
    Cookies.remove("Auth");
    dispatch(logout());
    dispatch(removeprofile());
    dispatch(removecourses());
    navigate("/login");
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={` bg-white sticky top-0 transition-all duration-300 ease-linear z-50  py-4 dark:bg-drkColor ${
          hasBorder ? "border-b-4 border-[#2DD4BF]" : ""
        }`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
              الشاطر
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600"
            aria-controls="navbar"
            aria-expanded={isOpen}>
            <span className="sr-only">افتح القائمة</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto  `}
            id="navbar">
            <ul className="flex  items-center sm:flex sm:justify-center sm:space-x-1  p-3 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:space-x-reverse md:mt-0 md:border-0  ">
              <li className="flex items-center gap-2">
                <div className="flex bg-gray-50 border border-[#a89f89] focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden">
                  <input
                    type="text"
                    placeholder=" ... ابحث هنا "
                    className="w-full text-sm bg-transparent outline-none pr-2 text-right"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    className="cursor-pointer ">
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </div>
                <DarkModeToggle />
              </li>
              {
                Auth ?<>                <li>
                 <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-white hover:text-mainColor hover:bg-white rounded-xl transition-all"
                 onClick={handleLogout}>
                  <Link to="/login" className="">
                    تسجيل خروج
                  </Link>
                </button>
              </li>
              <li>
                 <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-white hover:text-mainColor hover:bg-white rounded-xl transition-all">
                  <Link to="/mycourses" className="">
                    عرض كورساتي
                  </Link>
                </button>
              </li>
              {role === "Assistant" || role ==="Teacher" ?
              <li>
                 <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-white hover:text-mainColor hover:bg-white rounded-xl transition-all">
                  <Link to="assistant/dashboard" className="">
                    لوحة التحكم
                  </Link>
                </button>
              </li>:""}
              </>

              
                :<>
              <li>
                <button className="flex items-center gap-[5px] bg-white px-4 py-1 text-[16px] font-bold hover:shadow-custom text-black rounded-xl transition-all group">
                  <IoMdLogIn className="transition-transform  text-mainColor duration-500 ease-in-out group-hover:rotate-[720deg]" />
                  <Link to="/login">
                    تسجيل <span className="text-mainColor">دخولك</span>
                  </Link>
                </button>
              </li>
              <li>
                <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-white hover:text-mainColor hover:bg-white rounded-xl transition-all">
                  <Link to="/register" className="">
                    انشئ حسابك الان!
                  </Link>
                </button>
              </li></>
              
                              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
