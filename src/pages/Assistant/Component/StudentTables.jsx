/** @format */

export default function StudentTables() {
	const students = [
		{
			name: "أحمد محمد",
			email: "ahmed@email.com",
			phone: "01012345678",
			address: "القاهرة، مصر",
			parentPhone: "01098765432",
			courses: 5,
		},
		{
			name: "سارة علي",
			email: "sara@email.com",
			phone: "01123456789",
			address: "الإسكندرية، مصر",
			parentPhone: "01187654321",
			courses: 3,
		},
		{
			name: "محمد خالد",
			email: "mohamed@email.com",
			phone: "01234567890",
			address: "الجيزة، مصر",
			parentPhone: "01299887766",
			courses: 4,
		},
	];

	return (
		<div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden'>
			{/* Table Header */}
			<div className='p-4 sm:p-6 border-b border-gray-100 dark:border-gray-700'>
				<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
					<div>
						<h2 className='text-lg sm:text-xl font-semibold text-gray-900 dark:text-white'>
							قائمة الطلاب
						</h2>
						<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
							عرض وتعديل بيانات الطلاب
						</p>
					</div>
					<div className='flex items-center gap-2'>
						<div className='relative'>
							<input
								type='text'
								placeholder='بحث...'
								className='w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#025C74] focus:border-transparent'
							/>
							<svg
								className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Card View */}
			<div className='sm:hidden p-4 space-y-4'>
				{students.map((student, index) => (
					<div
						key={index}
						className='bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 p-4 space-y-3'>
						<div className='flex items-center justify-between'>
							<h3 className='font-semibold text-gray-900 dark:text-white'>
								{student.name}
							</h3>
							<span className='inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#025C74]/10 text-[#025C74] dark:bg-[#025C74]/20 dark:text-[#025C74]'>
								{student.courses} دورات
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
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<span className='text-gray-600 dark:text-gray-300'>
									{student.email}
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
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<span className='text-gray-600 dark:text-gray-300'>
									{student.phone}
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
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<span className='text-gray-600 dark:text-gray-300'>
									{student.address}
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
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<span className='text-gray-600 dark:text-gray-300'>
									{student.parentPhone}
								</span>
							</div>
						</div>
						<div className='flex justify-end'>
							<button
								className='text-gray-400 hover:text-[#025C74] dark:text-gray-500 dark:hover:text-[#025C74] transition-colors duration-150 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
								onClick={() => {
									/* Handle edit */
								}}
								aria-label='تعديل'>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Desktop Table View */}
			<div className='hidden sm:block overflow-x-auto'>
				<table className='w-full text-sm sm:text-base text-right text-gray-700 dark:text-gray-300'>
					<thead className='text-xs sm:text-sm uppercase bg-gray-50 dark:bg-gray-700/50'>
						<tr>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								الاسم
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								البريد الإلكتروني
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								رقم الهاتف
							</th>
							<th
								scope='col'
								className='px-4 sm:px-6 py-3 sm:py-4 font-medium hidden md:table-cell'>
								العنوان
							</th>
							<th
								scope='col'
								className='px-4 sm:px-6 py-3 sm:py-4 font-medium hidden lg:table-cell'>
								هاتف ولي الأمر
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								عدد الدورات
							</th>
							<th scope='col' className='px-4 sm:px-6 py-3 sm:py-4 font-medium'>
								<span className='sr-only'>تعديل</span>
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100 dark:divide-gray-700'>
						{students.map((student, index) => (
							<tr
								key={index}
								className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150'>
								<th
									scope='row'
									className='px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
									<div className='flex flex-col'>
										<span className='font-semibold'>{student.name}</span>
									</div>
								</th>
								<td className='px-4 sm:px-6 py-3 sm:py-4'>
									<div className='flex items-center gap-2'>
										<svg
											className='w-4 h-4 text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
											/>
										</svg>
										{student.email}
									</div>
								</td>
								<td className='px-4 sm:px-6 py-3 sm:py-4'>
									<div className='flex items-center gap-2'>
										<svg
											className='w-4 h-4 text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
											/>
										</svg>
										{student.phone}
									</div>
								</td>
								<td className='px-4 sm:px-6 py-3 sm:py-4 hidden md:table-cell'>
									<div className='flex items-center gap-2'>
										<svg
											className='w-4 h-4 text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
											/>
										</svg>
										{student.address}
									</div>
								</td>
								<td className='px-4 sm:px-6 py-3 sm:py-4 hidden lg:table-cell'>
									<div className='flex items-center gap-2'>
										<svg
											className='w-4 h-4 text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
											/>
										</svg>
										{student.parentPhone}
									</div>
								</td>
								<td className='px-4 sm:px-6 py-3 sm:py-4'>
									<span className='inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#025C74]/10 text-[#025C74] dark:bg-[#025C74]/20 dark:text-[#025C74]'>
										{student.courses} دورات
									</span>
								</td>
								<td className='px-4 sm:px-6 py-3 sm:py-4 text-right'>
									<button
										className='text-gray-400 hover:text-[#025C74] dark:text-gray-500 dark:hover:text-[#025C74] transition-colors duration-150 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
										onClick={() => {
											/* Handle edit */
										}}
										aria-label='تعديل'>
										<svg
											className='w-5 h-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
											/>
										</svg>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Table Footer */}
			<div className='p-4 sm:p-6 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4'>
				<div className='text-sm text-gray-500 dark:text-gray-400'>
					عرض 1 إلى 3 من 3 طلاب
				</div>
				<div className='flex items-center gap-2'>
					<button className='px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150'>
						السابق
					</button>
					<button className='px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150'>
						التالي
					</button>
				</div>
			</div>
		</div>
	);
}
