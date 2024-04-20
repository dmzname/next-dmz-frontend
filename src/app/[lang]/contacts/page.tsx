import { Locale } from '@/app/i18n';
import Link from 'next/link';

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
	// const { page } = await getDictionary(lang);
	return <main style={
		{
			// @ts-ignore
			'align-items': 'center',
			'display': 'flex',
			'flex-direction': 'column',
			'padding-top': '300px',
		}
	}>
		<p style={{
			// @ts-ignore
			'margin-bottom': '50px',
		}}>CONTACTS PAGE SOON</p>
		<Link href={`/${lang}/`}>GO BACK</Link>
	</main>;
}
