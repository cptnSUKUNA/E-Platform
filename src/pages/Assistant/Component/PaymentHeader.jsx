/** @format */

import SearchCompenet from "./SearchCompenet";

export default function PaymentHeader() {
	return (
		<div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 my-4 sm:my-6'>
			<div className='text-2xl sm:text-[30px] font-bold text-secondaryColor'>
				الدفعات
			</div>
			<div className='w-full sm:w-auto'>
				<SearchCompenet />
			</div>
		</div>
	);
}
