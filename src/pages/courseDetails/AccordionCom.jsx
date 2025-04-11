/** @format */

import { useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { MdPlaylistAddCircle } from "react-icons/md";

export default function AccordionCom() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const accordionData = [
		{
			title: "الدرس الاول",
			content:
				"المحاضرة الثانية تأثير الممارسات البشرية و الامطار الحمضية على التربة ١٢/٤ الاربعاء والمحاضرة الثالثة - قاسات التربية واستراتيجات - الحفاظ عليها١٢/٩ الاثنين المحاضرة الرابعة على الباب الثالث ١٢/١١ الاربعاء المحاضرة الخامسةمفهو.",
		},
		{
			title: "الدرس الثاني",
			content:
				"It makes building responsive and modern designs much faster, and you have complete control over your styling.",
		},
	];

	return (
		<div className='w-[80%] mx-auto mt-10'>
			{accordionData.map((item, index) => (
				<div key={index} className='mb-4 border-2 border-gray-300 rounded-lg'>
					{/* Accordion Header */}
					<button
						className='w-full px-4 py-2 text-left text-lg font-semibold text-gray-700 focus:outline-none flex justify-between items-center'
						onClick={() => toggleAccordion(index)}>
						<div className='flex items-center gap-1'>
							{" "}
							<MdPlaylistAddCircle className='text-[30px] text-gray-700' />
							<span className='text-[20px]'>{item.title}</span>
						</div>
						<FaCircleArrowUp
							className={`transform transition-transform text-[30px] text-gray-700 ${
								activeIndex === index ? "rotate-180" : ""
							}`}
						/>
					</button>

					{/* Accordion Content */}
					<div
						className={`overflow-hidden transition-all ease-in-out duration-300 ${
							activeIndex === index ? "max-h-screen" : "max-h-0"
						}`}>
						<p className='p-4 text-gray-700'>{item.content}</p>
					</div>
				</div>
			))}
		</div>
	);
}
