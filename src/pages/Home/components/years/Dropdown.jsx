import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-center w-max mx-auto font-[Marhey]">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="inline-flex   justify-center  px-14 py-2 text-sm font-medium text-secondaryColor border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        السنين
        <svg
          className="w-5 h-5  mr-8   " 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
          <ul id="dropdownMenu" className='absolute block items-center  bg-secondaryColor py-2  w-64  rounded  '>
          <li className='py-1 hover:border-2 hover:bg-blue-200 hover:text-black text-white text-sm cursor-pointer'>             السنة الأول
          </li>
          <li className='py-1 hover:border-2 hover:bg-blue-200 hover:text-black text-white text-sm cursor-pointer'>           السنة الثانية
          </li>
          <li className='py-1   hover:border-2 hover:bg-blue-200 hover:text-black text-white text-sm cursor-pointer'>           السنة التلاتة
          </li>
        </ul>
        
      )}
    </div>
  );
}
