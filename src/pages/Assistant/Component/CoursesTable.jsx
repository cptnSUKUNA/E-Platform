/** @format */

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { GetCoursesApi } from "../../../Store/Api/CourseApi";

export default function CoursesTable() {
	const navigate = useNavigate();

	const {
		data: courses,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["courses"],
		queryFn: () => GetCoursesApi(),
	});

	if (isLoading) {
		return (
			<div className='w-full text-center py-8'>جاري تحميل البيانات...</div>
		);
	}

	if (isError) {
		return (
			<div className='w-full text-center py-8 text-red-600'>
				حدث خطأ: {error.message}
			</div>
		);
	}

	return (
		<div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden'>
			{/* Table Header */}
			<div className='p-4 sm:p-6 border-b border-gray-100 dark:border-gray-700'>
				<div>
					<h2 className='text-lg sm:text-xl font-semibold text-gray-900 dark:text-white'>
						قائمة الدورات
					</h2>
					<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
						عرض وتعديل الدورات التعليمية
					</p>
				</div>
			</div>

			{/* Mobile Card View */}
			<div className='sm:hidden p-4 space-y-4'>
				{courses &&
					courses.map((course) => (
						<div
							key={course.id}
							className='bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 p-4 space-y-3'>
							<div className='flex items-center justify-between'>
								<h3 className='font-semibold text-gray-900 dark:text-white'>
									{course.title}
								</h3>
								<span className='inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#025C74]/10 text-[#025C74] dark:bg-[#025C74]/20 dark:text-[#025C74]'>
									{course.price}
								</span>
							</div>
							<div className='space-y-2'>
								<div className='flex items-center gap-2 text-sm'>
									<svg
										className='w-4 h-4 text-gray-400'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
										/>
									</svg>
									<span className='text-gray-600 dark:text-gray-300'>
										{course.startDate.split("T")[0]}
									</span>
								</div>
								<div className='flex items-center gap-2 text-sm'>
									<svg
										className='w-4 h-4 text-gray-400'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									<span className='text-gray-600 dark:text-gray-300'>
										{course.year}
									</span>
								</div>
							</div>
							<div className='flex justify-end'>
								<button
									className='font-medium text-white bg-[#FAA147] hover:bg-white hover:text-[#FAA147] px-3 py-1 rounded-md transition-colors text-sm'
									onClick={() => navigate(`/assistant/courses/${course.id}`)}>
									عرض
								</button>
							</div>
						</div>
					))}
			</div>

			{/* Desktop Table View */}
			<div className='hidden sm:block overflow-x-auto'>
				<table className='w-full text-sm text-right text-gray-700 dark:text-gray-300'>
					<thead className='text-xs uppercase bg-gray-50 dark:bg-gray-700/50'>
						<tr>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								عنوان الدورة
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								السعر
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								السنة
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								تاريخ البدء
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								<span className='sr-only'>عرض</span>
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100 dark:divide-gray-700'>
						{courses &&
							courses.map((course) => (
								<tr
									key={course.id}
									className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150'>
									<th
										scope='row'
										className='px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
										{course.title}
									</th>
									<td className='px-4 sm:px-6 py-3 sm:py-4 font-semibold text-[#025C74]'>
										{course.price}
									</td>
									<td className='px-4 sm:px-6 py-3 sm:py-4'>{course.year}</td>
									<td className='px-4 sm:px-6 py-3 sm:py-4'>
										{course.startDate.split("T")[0]}
									</td>
									<td className='px-4 sm:px-6 py-3 sm:py-4 text-center'>
										<button
											className='font-medium text-white bg-[#FAA147] hover:bg-white hover:text-[#FAA147] px-3 py-1 rounded-md transition-colors text-sm'
											onClick={() =>
												navigate(`/assistant/courses/${course.id}`)
											}>
											عرض
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>

			{courses && courses.length === 0 && (
				<div className='p-4 sm:p-6 text-center text-gray-500 dark:text-gray-400'>
					لا توجد دورات متاحة
				</div>
			)}
		</div>
	);
}
