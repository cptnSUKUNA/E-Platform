/** @format */

export default function SearchCompenet() {
	return (
		<div className='flex flex-row '>
			<input
				className='w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-secondaryColor'
				type='text'
				placeholder='بحث'
			/>
			<select className='w-full py-2 px-4 mx-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-secondaryColor'>
				<option value='all'>الكل</option>
				<option value='year'>السنة</option>
				<option value='month'>الشهر</option>
			</select>
			<button className='bg-secondaryColor  text-white py-2 px-4 rounded-lg ml-2'>
				بحث
			</button>
		</div>
	);
}
