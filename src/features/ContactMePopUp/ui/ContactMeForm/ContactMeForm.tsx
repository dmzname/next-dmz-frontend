'use client';
import cls from './ContactMeForm.module.scss';
import { useFormik } from 'formik';
import { IDictionaries } from '@/app/i18n';
import { fetchMessage, validateSchema } from '../../models';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';
import { ContactForm } from '../../models/services/validationForm/validationForm';

interface ICallBackFormProps {
	className?: string;
	translations?: IDictionaries;
}

export const ContactMeForm = ({ className, translations }: ICallBackFormProps) => {
	const [status, setStatus] = useState('');
	const { contactForm, validationErrorMessage } = translations ?? {};

	const handleSubmitResult = async (values: ContactForm) => {
		const response = await fetchMessage(values);
		response === 'error' ? setStatus('error') : setStatus('success');
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			contact: '',
			message: '',
		},
		validationSchema: validateSchema(validationErrorMessage),
		onSubmit: (values) => handleSubmitResult(values),
	});

	return (
		<form onSubmit={formik.handleSubmit} className={classNames(cls.root, {}, [className])}>
			<fieldset>
				<legend className={cls.legend}>{contactForm?.title}</legend>
				<p className={cls.subtitle} dangerouslySetInnerHTML={{ __html: contactForm?.subtitle || '' }} />
				<div className={classNames(cls['form-filed'], { [cls.isFocused]: Boolean(formik.values.username) })}>
					<input
						type="text"
						name="username"
						onChange={formik.handleChange}
						value={formik.values.username}
						autoComplete="off"
					/>
					<label htmlFor="username">{contactForm?.namePlaceholder}</label>
					{formik.errors.username && formik.touched.username && (
						<span className={cls['error-msg']}>{formik.errors.username}</span>
					)}
				</div>
				<div className={classNames(cls['form-filed'], { [cls.isFocused]: Boolean(formik.values.contact) })}>
					<input
						type="text"
						name="contact"
						onChange={formik.handleChange}
						value={formik.values.contact}
						autoComplete="off"
					/>
					<label htmlFor="contact">{contactForm?.contactPlaceholder}</label>
					{formik.errors.contact && formik.touched.contact && (
						<span className={cls['error-msg']}>{formik.errors.contact}</span>
					)}
				</div>
				<div
					className={classNames(cls['form-filed'], { [cls.isFocused]: Boolean(formik.values.message) }, [
						cls['form-filed-textarea'],
					])}
				>
					<textarea name="message" onChange={formik.handleChange} value={formik.values.message} autoComplete="off" />
					<label htmlFor="message">{contactForm?.messagePlaceholder}</label>
				</div>
				<Button type="submit" className={cls['form-submit-btn']}>
					{contactForm?.submitButton}
				</Button>
				<div className={cls.result}>{status === 'error' ? 'ERROR' : status === 'success' ? 'SUCCESS' : ''} </div>
			</fieldset>
		</form>
	);
};
