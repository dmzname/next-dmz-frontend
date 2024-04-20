import { i18n, IDictionaries, Locale } from '@/app/i18n';
import cls from './Header.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { Hamburger } from '@/features/Hamburger';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { NavMenu } from '@/widgets/NavMenu';

interface IHeaderProps {
	className?: string;
	translations?: IDictionaries;
	lang?: Locale;
}

export const Header = ({ className, translations, lang }: IHeaderProps) => {
	return (
		<header className={classNames(cls.root, {}, [className])}>
			<HeaderLogo lang={lang} />
			<NavMenu lang={lang} translations={translations} className={cls['header-nav']} />
			<LanguageSwitcher locales={[...i18n.locales]} />
			<Hamburger />
		</header>
	);
};
