/** @format */

import {
	BarChart,
	Bar,
	LineChart,
	Line,
	PieChart,
	Pie,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Cell,
	AreaChart,
	Area,
} from "recharts";

const EgyptianEducationalDashboard = () => {
	// Monthly revenue data (in Egyptian Pounds)
	const monthlyRevenueData = [
		{ month: "يناير", amount: 75000 },
		{ month: "فبراير", amount: 82500 },
		{ month: "مارس", amount: 95000 },
		{ month: "أبريل", amount: 88000 },
		{ month: "مايو", amount: 105000 },
		{ month: "يونيو", amount: 112000 },
	];

	// Payment methods distribution (Egyptian context)
	const paymentMethodsData = [
		{ name: "بطاقة ائتمان", value: 40 },
		{ name: "فودافون كاش", value: 25 },
		{ name: "فوري", value: 20 },
		{ name: "تحويل بنكي", value: 15 },
	];

	// Popular Egyptian educational courses by revenue
	const courseRevenueData = [
		{ name: "تطوير الويب", revenue: 175000 },
		{ name: "البرمجة بايثون", revenue: 145000 },
		{ name: "تصميم الجرافيك", revenue: 120000 },
		{ name: "اللغة العربية", revenue: 110000 },
		{ name: "التسويق الرقمي", revenue: 95000 },
	];

	// Daily student registrations (last week)
	const dailyStudentData = [
		{ day: "السبت", students: 32 },
		{ day: "الأحد", students: 45 },
		{ day: "الإثنين", students: 38 },
		{ day: "الثلاثاء", students: 52 },
		{ day: "الأربعاء", students: 48 },
		{ day: "الخميس", students: 60 },
		{ day: "الجمعة", students: 25 },
	];

	// Colors matching your theme with Egyptian flag influence
	const primaryColor = "#025C74";
	const secondaryColor = "#FAA147";
	const COLORS = [primaryColor, secondaryColor, "#E30613", "#6B7280"];

	return (
		<div className='w-full text-right p-4 sm:p-6 space-y-4 sm:space-y-6'>
			{/* Summary Stats */}
			<div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
				{[
					{
						title: "إجمالي الإيرادات",
						value: "645,000 ج.م",
						change: "+15%",
						icon: "💰",
					},
					{
						title: "متوسط سعر الدورة",
						value: "1,200 ج.م",
						change: "+8%",
						icon: "📊",
					},
					{ title: "عدد الطلاب", value: "2,850", change: "+22%", icon: "👥" },
					{
						title: "معدل إكمال الدورات",
						value: "76%",
						change: "+12%",
						icon: "🎯",
					},
				].map((stat, index) => (
					<div
						key={index}
						className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'>
						<div className='flex items-center justify-between mb-3 sm:mb-4'>
							<span className='text-xl sm:text-2xl'>{stat.icon}</span>
							<span className='text-xs sm:text-sm font-medium text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full'>
								{stat.change}
							</span>
						</div>
						<h4 className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1'>
							{stat.title}
						</h4>
						<p className='text-lg sm:text-2xl font-bold text-gray-900 dark:text-white'>
							{stat.value}
						</p>
					</div>
				))}
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
				{/* Monthly Revenue */}
				<div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700'>
					<div className='flex items-center justify-between mb-4 sm:mb-6'>
						<h3 className='text-base sm:text-lg font-bold text-gray-700 dark:text-gray-300'>
							الإيرادات الشهرية
						</h3>
						<span className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
							آخر 6 أشهر
						</span>
					</div>
					<div className='w-full h-[250px] sm:h-[300px]'>
						<ResponsiveContainer width='100%' height='100%'>
							<AreaChart
								data={monthlyRevenueData}
								margin={{ top: 10, right: 10, left: 30, bottom: 30 }}>
								<defs>
									<linearGradient id='colorAmount' x1='0' y1='0' x2='0' y2='1'>
										<stop
											offset='5%'
											stopColor={primaryColor}
											stopOpacity={0.2}
										/>
										<stop
											offset='95%'
											stopColor={primaryColor}
											stopOpacity={0}
										/>
									</linearGradient>
								</defs>
								<CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
								<XAxis
									dataKey='month'
									tickMargin={10}
									height={40}
									tick={{ fontSize: 10, fill: "#6B7280" }}
									axisLine={{ stroke: "#e5e7eb" }}
								/>
								<YAxis
									width={35}
									tickMargin={15}
									tickFormatter={(value) => `${value / 1000}K`}
									tick={{ fontSize: 10, fill: "#6B7280" }}
									axisLine={{ stroke: "#e5e7eb" }}
									domain={[0, "dataMax + 20000"]}
									tickCount={5}
								/>
								<Tooltip
									contentStyle={{
										backgroundColor: "white",
										borderRadius: "8px",
										border: "none",
										boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
										fontSize: "12px",
									}}
									formatter={(value) => [
										`${value.toLocaleString()} ج.م`,
										"الإيرادات",
									]}
								/>
								<Area
									type='monotone'
									dataKey='amount'
									name='الإيرادات'
									stroke={primaryColor}
									fill='url(#colorAmount)'
									strokeWidth={2}
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Payment Methods */}
				<div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300'>
					<div className='flex items-center justify-between mb-4 sm:mb-6'>
						<div>
							<h3 className='text-base sm:text-lg font-bold text-gray-700 dark:text-gray-300'>
								طرق الدفع
							</h3>
							<p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1'>
								توزيع طرق الدفع المستخدمة
							</p>
						</div>
						<div className='flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-1.5 rounded-lg'>
							<span className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
								نسبة التوزيع
							</span>
						</div>
					</div>
					<div className='w-full h-[250px] sm:h-[300px]'>
						<ResponsiveContainer width='100%' height='100%'>
							<PieChart>
								<Pie
									data={paymentMethodsData}
									cx='50%'
									cy='50%'
									innerRadius={60}
									outerRadius={90}
									paddingAngle={2}
									dataKey='value'
									nameKey='name'
									label={({ name, percent }) => {
										const percentage = (percent * 100).toFixed(0);
										return (
											<tspan>
												{name}
												<tspan x='0' dy='1.2em' fill='#6B7280' fontSize='10'>
													{percentage}%
												</tspan>
											</tspan>
										);
									}}
									labelLine={false}>
									{paymentMethodsData.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
											stroke='#fff'
											strokeWidth={2}
										/>
									))}
								</Pie>
								<Tooltip
									content={({ payload }) => {
										if (payload && payload.length) {
											const data = payload[0].payload;
											return (
												<div className='bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700'>
													<p className='text-sm font-medium text-gray-900 dark:text-white'>
														{data.name}
													</p>
													<p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
														{data.value}% من إجمالي المدفوعات
													</p>
												</div>
											);
										}
										return null;
									}}
								/>
								<Legend
									verticalAlign='bottom'
									height={36}
									formatter={(value) => (
										<span className='text-xs text-gray-500 dark:text-gray-400'>
											{value}
										</span>
									)}
								/>
							</PieChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Course Revenue */}
				<div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700'>
					<div className='flex items-center justify-between mb-4 sm:mb-6'>
						<h3 className='text-base sm:text-lg font-bold text-gray-700 dark:text-gray-300'>
							إيرادات الدورات
						</h3>
						<span className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
							أعلى 5 دورات
						</span>
					</div>
					<div className='w-full h-[250px] sm:h-[300px]'>
						<ResponsiveContainer width='100%' height='100%'>
							<BarChart
								data={courseRevenueData}
								layout='vertical'
								margin={{ top: 5, right: 10, left: 60, bottom: 5 }}>
								<CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
								<XAxis
									type='number'
									axisLine={{ stroke: "#e5e7eb" }}
									tick={{ fontSize: 10, fill: "#6B7280" }}
									tickFormatter={(value) => `${value / 1000}K`}
									domain={[0, 180000]}
									tickCount={5}
								/>
								<YAxis
									dataKey='name'
									type='category'
									tick={{ fontSize: 10, fill: "#6B7280" }}
									width={60}
									tickMargin={30}
									axisLine={{ stroke: "#e5e7eb" }}
								/>
								<Tooltip
									contentStyle={{
										backgroundColor: "white",
										borderRadius: "8px",
										border: "none",
										boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
										fontSize: "12px",
									}}
									formatter={(value) => [
										`${value.toLocaleString()} ج.م`,
										"الإيرادات",
									]}
								/>
								<Bar
									dataKey='revenue'
									name='الإيرادات'
									fill={secondaryColor}
									barSize={15}
									radius={[0, 4, 4, 0]}
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Daily Students */}
				<div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700'>
					<div className='flex items-center justify-between mb-4 sm:mb-6'>
						<h3 className='text-base sm:text-lg font-bold text-gray-700 dark:text-gray-300'>
							تسجيل الطلاب اليومي
						</h3>
						<span className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
							آخر أسبوع
						</span>
					</div>
					<div className='w-full h-[250px] sm:h-[300px]'>
						<ResponsiveContainer width='100%' height='100%'>
							<LineChart
								data={dailyStudentData}
								margin={{ top: 5, right: 10, left: 20, bottom: 30 }}>
								<CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
								<XAxis
									dataKey='day'
									height={40}
									tickMargin={10}
									tick={{ fontSize: 10, fill: "#6B7280" }}
									axisLine={{ stroke: "#e5e7eb" }}
								/>
								<YAxis
									width={35}
									tickMargin={15}
									tick={{ fontSize: 10, fill: "#6B7280" }}
									axisLine={{ stroke: "#e5e7eb" }}
									tickLine={{ stroke: "#e5e7eb" }}
									domain={[0, 70]}
									tickCount={6}
								/>
								<Tooltip
									contentStyle={{
										backgroundColor: "white",
										borderRadius: "8px",
										border: "none",
										boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
										fontSize: "12px",
									}}
								/>
								<Line
									type='monotone'
									dataKey='students'
									name='عدد الطلاب'
									stroke={secondaryColor}
									strokeWidth={2}
									dot={{
										stroke: primaryColor,
										strokeWidth: 2,
										fill: "white",
										r: 3,
									}}
									activeDot={{ r: 5, fill: primaryColor }}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EgyptianEducationalDashboard;
