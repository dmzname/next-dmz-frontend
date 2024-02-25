import { addMethod, InferType, object, string } from 'yup';

interface IValidationErrorMessage {
	contactError: string;
	requiredError: string;
	shortName: string;
	longName: string;
}

addMethod(string, 'contact', function contact(message) {
	return this.matches(/^(?:\+?\d{10,14}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, {
		message,
		name: 'contact',
		excludeEmptyString: true,
	});
});

export const validateSchema = (errorsMsg: IValidationErrorMessage | undefined) =>
	object({
		username: string().min(2, errorsMsg?.shortName).max(15, errorsMsg?.longName).required(errorsMsg?.requiredError),
		contact: string() // @ts-ignore
			.contact(errorsMsg?.contactError)
			.required(errorsMsg?.requiredError),
		message: string(),
	});

const val = validateSchema(undefined);
export type ContactForm = InferType<typeof val>;
