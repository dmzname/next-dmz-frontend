import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/styles/globals.scss';
import { Header } from '@/widgets/Header';
import { NavMenu } from '@/widgets/NavMenu';
import { getDictionary, i18n, Locale } from '@/app/i18n';
import { NavMenuProvider } from '@/app/providers/NavMenuProvider';
import DecorElement from '@/shared/assets/images/decor1.svg';
import { CallBackPopUp } from '@/features/CallBackPopUp';
import { PopUpProvider } from '@/app/providers/PopUpProvider';

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
				<DecorElement className="decor-element  decor-element-one" />
				<PopUpProvider>
					<NavMenuProvider>
						<Header />
						{children}
						<NavMenu list={navMenu} />
						<CallBackPopUp />
					</NavMenuProvider>
				</PopUpProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
