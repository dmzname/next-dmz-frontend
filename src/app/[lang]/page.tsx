import { getDictionary, Locale } from '@/app/i18n';
import { HeroBlock } from '@/widgets/HeroBlock';

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
	const { metadata } = await getDictionary(params.lang);
	return {
		title: metadata.main.title,
		description: metadata.main.description,
		keywords: metadata.main.keywords,
	};
}

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const { home } = await getDictionary(lang);
	const { hero } = home;
	return (
		<main>
			<HeroBlock lang={lang} info={hero} />
		</main>
	);
}
