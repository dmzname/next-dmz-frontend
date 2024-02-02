'use client';

import cls from './LanguageSwitcher.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/app/i18n';
interface ILanguageSwitcherProps {
	className?: string;
	locales: Locale[];
}

export const LanguageSwitcher = ({ className, locales }: ILanguageSwitcherProps) => {
	const pathName = usePathname();
	const currentLang = pathName.split('/')[1];

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;

		return segments.join('/');
	};

	return (
		<ul className={classNames(cls.root, {}, [className])}>
			{locales.map((locale) => {
				return (
					<li key={locale} className={classNames(cls['lang-link'], { [cls.active]: locale === currentLang })}>
						<Link href={redirectedPathName(locale)}>{locale}</Link>
					</li>
				);
			})}
		</ul>
	);
};
