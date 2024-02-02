import { getDictionary, Locale } from '@/app/i18n';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);
	return <main>{page}</main>;
}
