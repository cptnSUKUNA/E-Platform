/** @format */

import SearchCompenet from "./SearchCompenet";

export default function AssistantCourseHeader({ toggleaddcourse }) {
	return (
		<div className='w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden'>
			<div className='p-4 sm:p-6'>
				<div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6'>
					{/* Title Section */}
					<div className='w-full sm:w-auto text-center sm:text-right'>
						<h2 className='text-xl sm:text-2xl font-bold text-[#025C74] dark:text-white'>
							الدورات التعليمية
						</h2>
						<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
							إدارة وعرض الدورات التعليمية
						</p>
					</div>

					{/* Search and Add Course Section */}
					<div className='w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4'>
						<div className='w-full sm:w-64'>
							<SearchCompenet />
						</div>
						<button
							className='w-full sm:w-auto bg-[#025C74] text-white py-2.5 px-6 rounded-lg shadow-sm hover:bg-[#024C5C] transition-colors duration-200 font-medium whitespace-nowrap'
							onClick={toggleaddcourse}>
							اضافة دورة تعليمية
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
