import { i18n } from '@/app/i18n';
import cls from './Header.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { Hamburger } from '@/features/Hamburger';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';

interface IHeaderProps {
	className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
	return (
		<header className={classNames(cls.root, {}, [className])}>
			<HeaderLogo />
			<LanguageSwitcher locales={[...i18n.locales]} />
			<Hamburger />
		</header>
	);
};
