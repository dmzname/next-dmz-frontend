export const i18n = {
	defaultLocale: 'en',
	locales: ['en', 'ru', 'ua'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export interface IDictionaries {
	navMenu: Array<{
		href: string;
		value: string;
	}>;
	metadata: {
		main: {
			title: string;
			description: string;
			keywords: string;
		};
	};
	home: {
		hero: {
			title: string;
			descriptionOne: string;
			descriptionTwo: string;
			buttonOne: string;
			buttonTwo: string;
		};
	};
	contactForm: {
		title: string;
		subtitle: string;
		namePlaceholder: string;
		contactPlaceholder: string;
		messagePlaceholder: string;
		submitButton: string;
		successMsg: string;
		errorMsg: string;
	};
	validationErrorMessage: {
		contactError: string;
		requiredError: string;
		shortName: string;
		longName: string;
		invalidName: string;
	};
}
