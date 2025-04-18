/** @format */

import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { decodeJWT } from "../../../components/AssistantProtectedRoute";

export default function AssistantHeader({ toggleSidebar }) {
	const navigate = useNavigate();
	const Authtoken = useSelector((state) => state.auth.authmodel.token);
	const name = decodeJWT(Authtoken).unique_name;

	return (
		<header className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 w-full gap-4 sm:gap-0'>
			{/* Mobile Top Section */}
			<div className='flex items-center justify-between w-full sm:hidden'>
				<div className='flex items-center gap-3'>
					<button
						className='text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-200'
						onClick={toggleSidebar}
						aria-label='Toggle sidebar'>
						<FaBars size={20} />
					</button>
					<div>
						<h1 className='text-lg font-bold text-gray-900 dark:text-white'>
							مرحبا بك مجددً {name}
						</h1>
						<p className='text-xs text-gray-500 dark:text-gray-400'>
							أكمل من حيث توقفت
						</p>
					</div>
				</div>
				<div
					className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-200'
					onClick={() => navigate("profile")}
					role='button'
					tabIndex={0}
					onKeyPress={(e) => e.key === "Enter" && navigate("profile")}>
					<FaUserCircle className='h-8 w-8 text-gray-500 dark:text-gray-400' />
				</div>
			</div>

			{/* Mobile Search Section */}
			<div className='w-full sm:hidden'>
				<div className='relative'>
					<FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500' />
					<input
						type='text'
						placeholder='ابحث عن الدورات...'
						className='w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200'
					/>
				</div>
			</div>

			{/* Desktop View */}
			<div className='hidden sm:flex items-center gap-4 w-full sm:w-auto'>
				<button
					className='text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-200'
					onClick={toggleSidebar}
					aria-label='Toggle sidebar'>
					<FaBars size={20} />
				</button>

				<div>
					<h1 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white'>
						مرحبا بك مجددً {name}
					</h1>
					<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
						أكمل من حيث توقفت
					</p>
				</div>
			</div>

			<div className='hidden sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto'>
				<div className='relative w-full sm:w-64'>
					<FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500' />
					<input
						type='text'
						placeholder='ابحث عن الدورات...'
						className='w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200'
					/>
				</div>

				<div
					className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-200'
					onClick={() => navigate("profile")}
					role='button'
					tabIndex={0}
					onKeyPress={(e) => e.key === "Enter" && navigate("profile")}>
					<FaUserCircle className='h-8 w-8 sm:h-10 sm:w-10 text-gray-500 dark:text-gray-400' />
				</div>
			</div>
		</header>
	);
}
