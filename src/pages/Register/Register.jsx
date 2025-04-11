/** @format */

import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterApi } from "../../Store/Api/AccountApi";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
	fname: Yup.string()
		.required("الاسم الأول مطلوب")
		.min(2, "يجب أن يكون الاسم الأول على الأقل حرفين"),
	sname: Yup.string()
		.required("الاسم الثاني مطلوب")
		.min(2, "يجب أن يكون الاسم الثاني على الأقل حرفين"),
	tname: Yup.string()
		.required("الاسم الثالث مطلوب")
		.min(2, "يجب أن يكون الاسم الثالث على الأقل حرفين"),
	email: Yup.string()
		.email("البريد الإلكتروني غير صالح")
		.required("البريد الإلكتروني مطلوب"),
	phonenumber: Yup.string()
		.required("رقم الهاتف مطلوب")
		.matches(/^[0-9]{10}$/, "رقم الهاتف يجب أن يكون 10 أرقام"),
	parentphone: Yup.string()
		.required("رقم هاتف ولي الأمر مطلوب")
		.matches(/^[0-9]{10}$/, "رقم الهاتف يجب أن يكون 10 أرقام"),
	password: Yup.string()
		.required("كلمة المرور مطلوبة")
		.min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			"كلمة المرور يجب أن تحتوي على حرف كبير وحرف صغير ورقم"
		),
	confirmpassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "كلمة المرور غير متطابقة")
		.required("تأكيد كلمة المرور مطلوب"),
	gender: Yup.string().required("النوع مطلوب"),
	year: Yup.string().required("السنة الدراسية مطلوبة"),
});

export default function Register() {
	const mutation = useMutation({
		mutationFn: RegisterApi,
		onSuccess: () => {
			toast.success("تم إنشاء الحساب بنجاح");
		},
		onError: (error) => {
			toast.error(
				error.response?.data?.message || "حدث خطأ أثناء إنشاء الحساب"
			);
		},
	});

	const formik = useFormik({
		initialValues: {
			fname: "",
			sname: "",
			tname: "",
			email: "",
			phonenumber: "",
			parentphone: "",
			password: "",
			confirmpassword: "",
			gender: "",
			year: "",
		},
		validationSchema,
		onSubmit: (values) => {
			mutation.mutate(values);
		},
	});

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-drkColor p-4'>
			<div className='w-full max-w-md'>
				<div className='text-center mb-8'>
					<h2 className='text-2xl font-light text-gray-900 dark:text-white'>
						إنشاء حساب جديد
					</h2>
					<p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
						لديك حساب بالفعل؟{" "}
						<Link
							to='/login'
							className='text-secondaryColor hover:text-secondaryColor/80 transition-colors'>
							تسجيل الدخول
						</Link>
					</p>
				</div>

				<form onSubmit={formik.handleSubmit} className='space-y-4'>
					<div className='grid grid-cols-3 gap-3'>
						<div>
							<input
								type='text'
								name='fname'
								placeholder='الاسم الأول'
								className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
								value={formik.values.fname}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.fname && formik.errors.fname && (
								<p className='text-red-500 text-xs mt-1'>
									{formik.errors.fname}
								</p>
							)}
						</div>
						<div>
							<input
								type='text'
								name='sname'
								placeholder='الاسم الثاني'
								className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
								value={formik.values.sname}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.sname && formik.errors.sname && (
								<p className='text-red-500 text-xs mt-1'>
									{formik.errors.sname}
								</p>
							)}
						</div>
						<div>
							<input
								type='text'
								name='tname'
								placeholder='الاسم الثالث'
								className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
								value={formik.values.tname}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.tname && formik.errors.tname && (
								<p className='text-red-500 text-xs mt-1'>
									{formik.errors.tname}
								</p>
							)}
						</div>
					</div>

					<div>
						<input
							type='email'
							name='email'
							placeholder='البريد الإلكتروني'
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email && (
							<p className='text-red-500 text-xs mt-1'>{formik.errors.email}</p>
						)}
					</div>

					<div>
						<input
							type='text'
							name='phonenumber'
							placeholder='رقم الهاتف'
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
							value={formik.values.phonenumber}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.phonenumber && formik.errors.phonenumber && (
							<p className='text-red-500 text-xs mt-1'>
								{formik.errors.phonenumber}
							</p>
						)}
					</div>

					<div>
						<input
							type='text'
							name='parentphone'
							placeholder='رقم هاتف ولي الأمر'
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
							value={formik.values.parentphone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.parentphone && formik.errors.parentphone && (
							<p className='text-red-500 text-xs mt-1'>
								{formik.errors.parentphone}
							</p>
						)}
					</div>

					<div className='grid grid-cols-2 gap-3'>
						<div>
							<select
								name='year'
								className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
								value={formik.values.year}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}>
								<option value=''>السنة الدراسية</option>
								<option value='1'>الصف الأول الثانوي</option>
								<option value='2'>الصف الثاني الثانوي</option>
								<option value='3'>الصف الثالث الثانوي</option>
							</select>
							{formik.touched.year && formik.errors.year && (
								<p className='text-red-500 text-xs mt-1'>
									{formik.errors.year}
								</p>
							)}
						</div>
						<div>
							<select
								name='gender'
								className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
								value={formik.values.gender}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}>
								<option value=''>النوع</option>
								<option value='male'>ذكر</option>
								<option value='female'>أنثى</option>
							</select>
							{formik.touched.gender && formik.errors.gender && (
								<p className='text-red-500 text-xs mt-1'>
									{formik.errors.gender}
								</p>
							)}
						</div>
					</div>

					<div>
						<input
							type='password'
							name='password'
							placeholder='كلمة المرور'
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.password && formik.errors.password && (
							<p className='text-red-500 text-xs mt-1'>
								{formik.errors.password}
							</p>
						)}
					</div>

					<div>
						<input
							type='password'
							name='confirmpassword'
							placeholder='تأكيد كلمة المرور'
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-secondaryColor dark:bg-gray-800 dark:text-white'
							value={formik.values.confirmpassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.confirmpassword &&
							formik.errors.confirmpassword && (
								<p className='text-red-500 text-xs mt-1'>
									{formik.errors.confirmpassword}
								</p>
							)}
					</div>

					<button
						type='submit'
						className='w-full py-2 px-4 bg-secondaryColor text-white rounded-md hover:bg-secondaryColor/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:ring-offset-2'
						disabled={mutation.isPending}>
						{mutation.isPending ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
					</button>
				</form>
			</div>
		</div>
	);
}
