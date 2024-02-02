import cls from './Header.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { Hamburger } from '@/features/Hamburger';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { i18n } from '@/app/i18n';

interface IHeaderProps {
	className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
	return (
		<header className={classNames(cls.root, {}, [className])}>
			<HeaderLogo />
			{/*// @ts-ignore*/}
			<LanguageSwitcher locales={i18n.locales} />
			<Hamburger />
		</header>
	);
};
