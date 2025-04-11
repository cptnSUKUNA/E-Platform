/** @format */

import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className='w-full bg-[rgb(0,61,79)] text-white py-12'>
			<div className='w-full px-8'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto'>
					{/* About Section */}
					<div className='space-y-4'>
						<h3 className='text-lg font-medium'>معلومات عنا</h3>
						<p className='text-gray-300 leading-relaxed'>
							نحن فريق ملتزم بتقديم خدمات تعليمية متميزة، تركز على تطوير مهارات
							الطلاب وتمكينهم لتحقيق أحلامهم.
						</p>
					</div>

					{/* Links Section */}
					<div className='space-y-4'>
						<h3 className='text-lg font-medium'>روابط سريعة</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									to='/'
									className='text-gray-300 hover:text-white transition-colors'>
									الرئيسية
								</Link>
							</li>
							<li>
								<Link
									to='/about'
									className='text-gray-300 hover:text-white transition-colors'>
									من نحن
								</Link>
							</li>
							<li>
								<Link
									to='/services'
									className='text-gray-300 hover:text-white transition-colors'>
									الخدمات
								</Link>
							</li>
							<li>
								<Link
									to='/contact'
									className='text-gray-300 hover:text-white transition-colors'>
									تواصل معنا
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Section */}
					<div className='space-y-4'>
						<h3 className='text-lg font-medium'>تواصل معنا</h3>
						<ul className='space-y-2 text-gray-300'>
							<li className='flex items-center'>
								<span className='ml-2'>+123 456 7890</span>
							</li>
							<li className='flex items-center'>
								<span className='ml-2'>info@example.com</span>
							</li>
							<li className='flex items-center'>
								<span className='ml-2'>شارع النجاح، المغرب</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm max-w-7xl mx-auto'>
					&copy; {new Date().getFullYear()} جميع الحقوق محفوظة
				</div>
			</div>
		</footer>
	);
}
