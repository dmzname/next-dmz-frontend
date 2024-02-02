import { getDictionary, Locale } from '@/app/i18n';

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
	const { metadata } = await getDictionary(params.lang);
	return {
		title: metadata.main.title,
		description: metadata.main.description,
		keywords: metadata.main.keywords,
	};
}

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	// const { page } = await getDictionary(lang);
	return <main></main>;
}
