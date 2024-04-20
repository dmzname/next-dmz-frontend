'use client';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IDictionaries, Locale } from '@/app/i18n';
import Link from 'next/link';

interface INavMenuProps {
	className?: string;
	translations?: IDictionaries;
	lang?: Locale;
}

export const NavMenu = ({ className, translations, lang }: INavMenuProps) => {
	const { navMenu } = translations ?? {};
	return (
		<nav className={classNames('', {}, [className])}>
			<ul>
				{navMenu?.map(({ href, value }, index) => (
					<li key={index + value}>
						<Link href={`/${lang}/${href}`}>{value}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
