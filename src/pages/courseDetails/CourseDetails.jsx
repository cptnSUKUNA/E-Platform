/** @format */

import img_course from "./../../../src/assets/course_img.jpg";
import AccordionCom from "./AccordionCom";

export default function CourseDetails() {
	return (
		<div className='bg-gray-50 min-h-screen py-12 px-4'>
			<div className='container mx-auto max-w-5xl'>
				{/* Main Course Card */}
				<div className='bg-white rounded-xl shadow-md overflow-hidden mb-10'>
					<div className='border-b border-gray-100 py-6 px-8'>
						<h1 className='text-3xl md:text-4xl text-center font-bold font-[Marhey] text-gray-800'>
							كورس الشهر الاول
						</h1>
					</div>

					<div className='p-8'>
						<div className='grid md:grid-cols-2 gap-10 items-start'>
							{/* Left side - Course image and pricing */}
							<div className='flex flex-col items-center'>
								<img
									src={img_course}
									alt='Course'
									className='w-full max-w-md rounded-lg shadow-sm object-cover mb-6'
								/>

								<div className='bg-secondaryColor px-6 py-3 rounded-lg text-white text-center font-bold text-xl mb-4'>
									<span>120</span>
									<span className='mr-2'>جنيها</span>
								</div>
								<button className='bg-mainColor hover:bg-mainColor/90 text-white transition-colors duration-200 font-bold px-8 py-3 rounded-lg text-lg w-full max-w-xs'>
									اشترك الان
								</button>
							</div>

							{/* Right side - Course schedule */}
							<div>
								<h2 className='text-xl font-bold text-gray-800 border-r-4 border-mainColor pr-4 mb-6'>
									جدول المحاضرات
								</h2>

								<ul className='space-y-3'>
									{[
										"المحاضرة الأولى تركيب التربة و أهميتها ١٢/٢ الأثنين",
										"المحاضرة الثانية تأثير الممارسات البشرية و الامطار الحمضية",
										"والمحاضرة الثالثة - قاسات التربية واستراتيجات - الحفاظ عليه",
										"والمحاضرة الرابعة - مراجعة شاملة للوحدة",
									].map((lecture, index) => (
										<li
											key={index}
											className='flex items-start gap-3 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors'>
											<span className='w-6 h-6 bg-secondaryColor text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium text-sm'>
												{index + 1}
											</span>
											<span className='text-gray-700'>{lecture}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Course Description */}
				<div className='bg-white rounded-xl shadow-md overflow-hidden mb-10 p-8'>
					<h2 className='text-xl font-bold text-gray-800 mb-4'>وصف الكورس</h2>

					<p className='text-gray-700 leading-relaxed'>
						المحاضرة الثانية تأثير الممارسات البشرية و الامطار الحمضية على
						التربة ١٢/٤ الاربعاء والمحاضرة الثالثة - قاسات التربية واستراتيجات -
						الحفاظ عليها١٢/٩ الاثنين المحاضرة الرابعة "مراجعة على الباب الثالث
						١٢/١١ الاربعاء المحاضرة الخامسة "مفهوم الاستدامة البيئية" ١٦ / ١٢
						الاثنين المحاضرة السادسه" تأثير الملوثات على البيئة وصحة الانسان
						١٢/١٨ الاربعاء المحاضر السابعه التنوع البيولوجي وحماية الانواع ١٢/٢٣
						الاتنين المحاضرة الثامنة مراجعة على الباب الرابع ٢٥ / ١٢ الأربعاء
					</p>
				</div>

				{/* Course Content */}
				<div className='bg-white rounded-xl shadow-md overflow-hidden p-8'>
					<h2 className='text-2xl text-center font-bold font-[Marhey] text-gray-800 mb-6'>
						محتوي <span className='text-mainColor'>الكورس</span>
					</h2>

					<AccordionCom />

					<div className='mt-8 bg-gray-50 border border-gray-100 rounded-lg p-4'>
						<div className='font-bold text-gray-800'>ملاحظة</div>
						<div className='text-gray-700'>
							يتم توفير جميع مواد الدورة للطلاب المسجلين مع إمكانية الوصول إليها
							مدى الحياة
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
