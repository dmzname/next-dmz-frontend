import '@/app/styles/globals.scss';
import { Header } from '@/widgets/Header';
import { NavMenu } from '@/widgets/NavMenu';
import { getDictionary, i18n, Locale } from '@/app/i18n';
import { NavMenuProvider } from '@/app/providers/NavMenuProvider';

export { metadata } from '@/app/metadata';

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
	const { navMenu } = await getDictionary(params.lang);
	return (
		<html lang={params.lang}>
			<body>
				<NavMenuProvider>
					<Header />
					{children}
					<NavMenu list={navMenu} />
				</NavMenuProvider>
			</body>
		</html>
	);
}
