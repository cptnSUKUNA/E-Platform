/** @format */

import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { FaBook, FaMoneyBill, FaPeopleGroup } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logout } from "../Store/Slices/AuthSlice";

export default function SideBar({ showsidebar, setShowSidebar }) {
	const ref = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowSidebar(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside, true);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside, true);
		};
	}, [ref]);

	return (
		showsidebar && (
			<nav
				ref={ref}
				className='h-full w-64 sm:w-72 bg-gradient-to-b from-[#013849] to-[#025C74] text-white p-4 sm:p-6 flex flex-col items-center shadow-lg fixed sm:fixed inset-y-0 lg:sticky lg:top-0 z-50 transition-transform duration-300 ease-in-out'>
				{/* Logo Section */}
				<div className='w-full flex items-center justify-center mb-8 sm:mb-12'>
					<h2 className='text-2xl sm:text-3xl font-bold tracking-wide'>
						منصة الشاطر
					</h2>
				</div>

				{/* Navigation Links */}
				<ul className='space-y-2 w-full'>
					{[
						{
							to: "/assistant/dashboard",
							icon: <FaHome size={20} />,
							text: "لوحه التحكم",
						},
						{
							to: "/assistant/Students",
							icon: <FaPeopleGroup size={20} />,
							text: "الطلاب",
						},
						{
							to: "/assistant/courses",
							icon: <FaBook size={20} />,
							text: "الكورسات",
						},
						{
							to: "/assistant/payments",
							icon: <FaMoneyBill size={20} />,
							text: "المدفوعات",
						},
					].map((item) => (
						<li key={item.to}>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									`flex items-center gap-4 text-base sm:text-lg px-4 py-3 rounded-lg transition-all duration-200 ${
										isActive
											? "bg-[#027c97] text-white shadow-md"
											: "text-gray-200 hover:bg-[#027c97]/50 hover:text-white"
									}`
								}>
								{item.icon}
								<span>{item.text}</span>
							</NavLink>
						</li>
					))}
				</ul>

				{/* Logout Button */}
				<div className='mt-auto w-full'>
					<button
						className='flex items-center gap-4 w-full text-base sm:text-lg px-4 py-3 rounded-lg transition-all duration-200 text-gray-200 hover:bg-[#027c97]/50 hover:text-white'
						onClick={() => {
							dispatch(logout());
							navigate("/login");
						}}>
						<IoIosLogOut size={20} />
						<span>تسجيل الخروج</span>
					</button>
				</div>
			</nav>
		)
	);
}

SideBar.propTypes = {
	showsidebar: PropTypes.bool,
	setShowSidebar: PropTypes.func,
};
