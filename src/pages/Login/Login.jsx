/** @format */

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { LoginApi } from "../../Store/Api/AccountApi";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { login } from "../../Store/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { decodeJWT } from "../../components/AssistantProtectedRoute";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email("البريد الإلكتروني غير صالح")
		.required("البريد الإلكتروني مطلوب"),
	password: Yup.string()
		.required("كلمة المرور مطلوبة")
		.min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف"),
});

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const mutation = useMutation({
		mutationFn: LoginApi,
		onSuccess: (response) => {
			Cookies.set("Auth", JSON.stringify(response.data));
			dispatch(login(response.data));
			const role = decodeJWT(response.data.token).role;
			if (role === "Assistant" || role === "Teacher") {
				navigate("/assistant");
			} else {
				navigate("/");
			}
			toast.success("تم تسجيل الدخول بنجاح");
		},
		onError: (error) => {
			toast.error(
				error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول"
			);
		},
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema,
		onSubmit: (values) => {
			mutation.mutate(values);
		},
	});

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-drkColor dark:to-gray-900 p-4'>
			<div className='w-full max-w-md'>
				<div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl'>
					<div className='text-center mb-8'>
						<div className='w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 flex items-center justify-center transform transition-transform duration-300 hover:scale-110'>
							<svg
								className='w-10 h-10 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
								/>
							</svg>
						</div>
						<h2 className='text-3xl font-light text-gray-900 dark:text-white mb-2'>
							مرحباً بعودتك
						</h2>
						<p className='text-sm text-gray-600 dark:text-gray-400'>
							ليس لديك حساب؟{" "}
							<Link
								to='/register'
								className='text-secondaryColor hover:text-secondaryColor/80 transition-colors font-medium'>
								إنشاء حساب جديد
							</Link>
						</p>
					</div>

					<form onSubmit={formik.handleSubmit} className='space-y-6'>
						<div className='relative group'>
							<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-secondaryColor transition-colors'>
								<svg
									className='w-5 h-5'
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
							</div>
							<input
								type='email'
								name='email'
								placeholder='البريد الإلكتروني'
								className='w-full px-4 py-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white transition-all duration-300'
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.email && formik.errors.email && (
								<p className='text-red-500 text-xs mt-1 animate-fadeIn'>
									{formik.errors.email}
								</p>
							)}
						</div>

						<div className='relative group'>
							<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-secondaryColor transition-colors'>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
									/>
								</svg>
							</div>
							<input
								type={showPassword ? "text" : "password"}
								name='password'
								placeholder='كلمة المرور'
								className='w-full px-4 py-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white transition-all duration-300'
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<button
								type='button'
								onClick={() => setShowPassword(!showPassword)}
								className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 hover:text-secondaryColor transition-colors'>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									{showPassword ? (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
										/>
									) : (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									)}
								</svg>
							</button>
							{formik.touched.password && formik.errors.password && (
								<p className='text-red-500 text-xs mt-1 animate-fadeIn'>
									{formik.errors.password}
								</p>
							)}
						</div>

						<button
							type='submit'
							className='w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
							disabled={mutation.isPending}>
							<span className='flex items-center justify-center'>
								{mutation.isPending ? (
									<>
										<svg
											className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
										</svg>
										جاري تسجيل الدخول...
									</>
								) : (
									"تسجيل الدخول"
								)}
							</span>
						</button>

						<div className='text-center'>
							<Link
								to='/'
								className='text-sm text-gray-600 dark:text-gray-400 hover:text-secondaryColor transition-colors'>
								العودة إلى الصفحة الرئيسية
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
