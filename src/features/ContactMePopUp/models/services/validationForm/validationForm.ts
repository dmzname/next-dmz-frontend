import { InferType, object, string } from 'yup';

interface IValidationErrorMessage {
	contactError: string;
	requiredError: string;
	shortName: string;
	longName: string;
	invalidName: string;
}

export const validateSchema = (errorsMsg: IValidationErrorMessage | undefined) =>
	object({
		username: string()
			.matches(/^[a-zA-Zа-яА-ЯҐґЄєІіЇї]+(\s[a-zA-Zа-яА-ЯҐґЄєІіЇї]+)?$/, { message: errorsMsg?.invalidName })
			.min(2, errorsMsg?.shortName)
			.max(15, errorsMsg?.longName)
			.required(errorsMsg?.requiredError),
		contact: string()
			.matches(/^(?:\+?\d{10,14}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, {
				message: errorsMsg?.contactError,
			})
			.required(errorsMsg?.requiredError),
		message: string(),
	});

const val = validateSchema(undefined);
export type ContactForm = InferType<typeof val>;
