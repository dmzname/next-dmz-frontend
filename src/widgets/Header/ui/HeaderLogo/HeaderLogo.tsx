import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderLogo.module.scss';
import Logo from '@/shared/assets/images/dmz_logo.svg';
import Link from 'next/link';
import { Locale } from '@/app/i18n';

interface IHeaderLogoProps {
	className?: string;
	lang?: Locale;
}

export const HeaderLogo = ({ className, lang }: IHeaderLogoProps) => {
	return (
		<Link href={`/${lang}/`} className={classNames(cls.root, {}, [className])}>
			<Logo />
			<span>dmz.name</span>
		</Link>
	);
};
