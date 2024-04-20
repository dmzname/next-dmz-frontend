'use client';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './OverlayMobileMenu.module.scss';
import { NavMenu } from '../NavMenu';
import { IDictionaries, Locale } from '@/app/i18n';
import { useNavMenu } from '@/app/providers/NavMenuProvider';
import { useEffect, useState } from 'react';

interface IOverlayMobileMenuProps {
	className?: string;
	translations?: IDictionaries;
	lang?: Locale;
}

export const OverlayMobileMenu = ({ className, translations, lang }: IOverlayMobileMenuProps) => {
	const { navMenu } = translations ?? {};
	const { isVisible } = useNavMenu();
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		if (!isVisible && isShow) {
			setTimeout(() => setIsShow(isVisible), 300);
		} else {
			setIsShow(isVisible);
		}
	}, [isVisible, isShow]);

	return isShow ? (
		<div className={classNames(cls.root, { [cls.active]: isVisible }, [className])}>
			<NavMenu lang={lang} className={cls['mobile-nav']} translations={translations} />
		</div>
	) : null;
};