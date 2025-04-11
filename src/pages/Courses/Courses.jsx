/** @format */

import { Link } from "react-router-dom";
import CourseCard from "./component/CourseCard";
import { GetCoursesApi } from "../../Store/Api/CourseApi";
import { useQuery } from "@tanstack/react-query";

const courses = [
	{
		id: 1,
		title: "دورة التسويق الرقمي",
		description:
			"تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
		videoUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
		price: "250",
	},
	{
		id: 2,
		title: "دورة التسويق الرقمي",
		description:
			"تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
		videoUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
		price: "250",
	},
	{
		id: 3,
		title: "دورة التسويق الرقمي",
		description:
			"تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
		videoUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
		price: "250",
	},
	{
		id: 4,
		title: "دورة التسويق الرقمي",
		description:
			"تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
		videoUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
		price: "250",
	},
];

export default function Courses() {
	const { data, isLoading } = useQuery({
		queryKey: ["courses"],
		queryFn: () => GetCoursesApi(),
		onSuccess: (data) => {
			console.log(data);
		},
	});

	return (
		<section className='py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'>
			<div className='container mx-auto px-4 max-w-7xl'>
				<div className='text-center mb-16'>
					<h4 className='text-4xl md:text-5xl font-bold text-secondaryColor dark:text-white mb-3 relative inline-block'>
						كورستنا التعليمية
					</h4>
				</div>

				<div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-16'>
					<p className='text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center md:text-right'>
						اكتشف مجموعة من الدورات التعليمية المتخصصة في مختلف المجالات.
					</p>
					<Link
						to='/allCourses'
						className='bg-secondaryColor text-white px-8 py-3 rounded-lg font-semibold
              hover:bg-secondaryColor/90 transition-colors duration-200
              shadow-lg hover:shadow-xl transform hover:-translate-y-1
              whitespace-nowrap'>
						جميع الدورات
					</Link>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{courses.map((course, index) => {
						if (index < 3) {
							return (
								<CourseCard
									key={course.id}
									id={course.id}
									title={course.title}
									description={course.description}
									videoUrl={course.videoUrl}
									price={course.price}
								/>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
}
