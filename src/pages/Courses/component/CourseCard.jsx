/** @format */

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CourseCard({
	id,
	title,
	description,
	videoUrl,
	price,
}) {
	return (
		<div
			className='bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300
      w-full max-w-sm rounded-xl overflow-hidden mx-auto font-[sans-serif] relative group'>
			<div className='relative h-48 overflow-hidden'>
				<img
					src={"../../../src/assets/course_img.jpg"}
					className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
					alt={title}
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			</div>

			<div className='p-6'>
				<h3 className='text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2'>
					{title}
				</h3>

				<div className='flex items-center justify-between mb-4'>
					<div className='bg-secondaryColor/10 text-secondaryColor rounded-lg py-1.5 px-3'>
						<span className='font-bold'>{price}</span>
						<span className='text-sm mr-1'>ريال</span>
					</div>
					<div className='text-sm text-gray-500 dark:text-gray-400'>
						<span>الأحد، ٨ ديسمبر ٢٠٢٤</span>
					</div>
				</div>

				<p className='text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-6'>
					{description}
				</p>

				<div className='flex gap-3'>
					<Link
						to={`/courses/details/${id}`}
						className='flex-1 bg-mainColor text-white px-4 py-2.5 rounded-lg text-center font-semibold
              hover:bg-mainColor/90 transition-colors duration-200'>
						تفاصيل أكثر
					</Link>
					<Link
						to='/'
						className='flex-1 border border-secondaryColor text-secondaryColor px-4 py-2.5 rounded-lg text-center font-semibold
              hover:bg-secondaryColor/10 transition-colors duration-200'>
						انضم لنا الآن
					</Link>
				</div>
			</div>
		</div>
	);
}

CourseCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	videoUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};
