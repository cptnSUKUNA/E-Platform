/** @format */

import React from "react";

export default function AdminControls({ onAddLesson, onRedirectToExam }) {
	return (
		<div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden'>
			<div className='p-4 sm:p-6'>
				<div className='flex flex-col items-center gap-4'>
					<h4 className='text-xl sm:text-2xl font-bold text-[#025C74] dark:text-white'>
						لوحة التحكم
					</h4>
					<div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'>
						<button
							onClick={onAddLesson}
							className='w-full sm:w-auto bg-[#025C74] text-white py-2.5 px-6 rounded-lg shadow-sm hover:bg-[#024C5C] transition-colors duration-200 font-medium'>
							إضافة درس جديد
						</button>
						<button
							onClick={onRedirectToExam}
							className='w-full sm:w-auto bg-[#FAA147] text-white py-2.5 px-6 rounded-lg shadow-sm hover:bg-[#E8913E] transition-colors duration-200 font-medium'>
							الذهاب إلى الإختبار
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
