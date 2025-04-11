/** @format */

export default function PaymentTables() {
	return (
		<div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden'>
			{/* Table Header */}
			<div className='p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50'>
				<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6'>
					<div className='space-y-1'>
						<h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
							المدفوعات
						</h2>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							إدارة وتتبع المدفوعات
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<div className='relative flex-1 sm:flex-none sm:w-72'>
							<input
								type='text'
								placeholder='ابحث عن مدفوعات...'
								className='w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#025C74] focus:border-transparent transition-all'
							/>
							<svg
								className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
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
						{/* <button className='px-4 py-2.5 rounded-xl bg-[#025C74] text-white hover:bg-[#024C5C] transition-colors flex items-center gap-2'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 6v6m0 0v6m0-6h6m-6 0H6'
								/>
							</svg>
							<span>إضافة دفعة</span>
						</button> */}
					</div>
				</div>
			</div>

			{/* Mobile Card View */}
			<div className='sm:hidden p-4 space-y-4'>
				{[
					{
						studentName: "أحمد محمد",
						courseName: "البرمجة بلغة جافا",
						amount: "1500 ج.م",
						date: "15/03/2025",
						paymentMethod: "بطاقة ائتمان",
					},
					{
						studentName: "سارة علي",
						courseName: "تصميم الجرافيك",
						amount: "1200 ج.م",
						date: "10/03/2025",
						paymentMethod: "تحويل بنكي",
					},
					{
						studentName: "محمد خالد",
						courseName: "تطوير تطبيقات الويب",
						amount: "1800 ج.م",
						date: "05/03/2025",
						paymentMethod: "نقدي",
					},
					{
						studentName: "فاطمة أحمد",
						courseName: "التسويق الرقمي",
						amount: "1000 ج.م",
						date: "01/03/2025",
						paymentMethod: "بطاقة ائتمان",
					},
				].map((payment, index) => (
					<div
						key={index}
						className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-4 shadow-sm hover:shadow-md transition-shadow'>
						<div className='flex items-center justify-between'>
							<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
								{payment.studentName}
							</h3>
							<span className='inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium bg-[#025C74]/10 text-[#025C74] dark:bg-[#025C74]/20'>
								{payment.amount}
							</span>
						</div>
						<div className='space-y-3'>
							<div className='flex items-center gap-3'>
								<div className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700'>
									<svg
										className='w-5 h-5 text-gray-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
										/>
									</svg>
								</div>
								<span className='text-gray-700 dark:text-gray-300'>
									{payment.courseName}
								</span>
							</div>
							<div className='flex items-center gap-3'>
								<div className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700'>
									<svg
										className='w-5 h-5 text-gray-500'
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
								</div>
								<span className='text-gray-700 dark:text-gray-300'>
									{payment.date}
								</span>
							</div>
							<div className='flex items-center gap-3'>
								<div className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700'>
									<svg
										className='w-5 h-5 text-gray-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
										/>
									</svg>
								</div>
								<span className='text-gray-700 dark:text-gray-300'>
									{payment.paymentMethod}
								</span>
							</div>
						</div>
						<div className='flex justify-end'>
							<button className='px-4 py-2 rounded-lg bg-[#FAA147] text-white hover:bg-[#E8913E] transition-colors flex items-center gap-2'>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
									/>
								</svg>
								<span>عرض التفاصيل</span>
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Desktop Table View */}
			<div className='hidden sm:block overflow-x-auto'>
				<table className='w-full text-sm text-right text-gray-700 dark:text-gray-300'>
					<thead className='text-xs uppercase bg-gray-50 dark:bg-gray-900/50'>
						<tr>
							<th
								scope='col'
								className='px-6 py-4 font-semibold text-gray-500 dark:text-gray-400'>
								اسم الطالب
							</th>
							<th
								scope='col'
								className='px-6 py-4 font-semibold text-gray-500 dark:text-gray-400'>
								اسم الدورة
							</th>
							<th
								scope='col'
								className='px-6 py-4 font-semibold text-gray-500 dark:text-gray-400'>
								المبلغ
							</th>
							<th
								scope='col'
								className='px-6 py-4 font-semibold text-gray-500 dark:text-gray-400'>
								التاريخ
							</th>
							<th
								scope='col'
								className='px-6 py-4 font-semibold text-gray-500 dark:text-gray-400'>
								طريقة الدفع
							</th>
							<th
								scope='col'
								className='px-6 py-4 font-semibold text-gray-500 dark:text-gray-400'>
								<span className='sr-only'>تعديل</span>
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
						{[
							{
								studentName: "أحمد محمد",
								courseName: "البرمجة بلغة جافا",
								amount: "1500 ج.م",
								date: "15/03/2025",
								paymentMethod: "بطاقة ائتمان",
							},
							{
								studentName: "سارة علي",
								courseName: "تصميم الجرافيك",
								amount: "1200 ج.م",
								date: "10/03/2025",
								paymentMethod: "تحويل بنكي",
							},
							{
								studentName: "محمد خالد",
								courseName: "تطوير تطبيقات الويب",
								amount: "1800 ج.م",
								date: "05/03/2025",
								paymentMethod: "نقدي",
							},
							{
								studentName: "فاطمة أحمد",
								courseName: "التسويق الرقمي",
								amount: "1000 ج.م",
								date: "01/03/2025",
								paymentMethod: "بطاقة ائتمان",
							},
						].map((payment, index) => (
							<tr
								key={index}
								className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150'>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
									{payment.studentName}
								</th>
								<td className='px-6 py-4'>{payment.courseName}</td>
								<td className='px-6 py-4 font-semibold text-[#025C74]'>
									{payment.amount}
								</td>
								<td className='px-6 py-4'>{payment.date}</td>
								<td className='px-6 py-4'>{payment.paymentMethod}</td>
								<td className='px-6 py-4 text-center'>
									<button className='px-4 py-2 rounded-lg bg-[#FAA147] text-white hover:bg-[#E8913E] transition-colors flex items-center gap-2'>
										<svg
											className='w-5 h-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
											/>
										</svg>
										<span>عرض</span>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Table Footer */}
			<div className='p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50'>
				<div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
					<div className='text-sm text-gray-500 dark:text-gray-400'>
						عرض 1 إلى 4 من 4 مدفوعات
					</div>
					<div className='flex items-center gap-2'>
						<button className='px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
							<span>السابق</span>
						</button>
						<button className='px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2'>
							<span>التالي</span>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
