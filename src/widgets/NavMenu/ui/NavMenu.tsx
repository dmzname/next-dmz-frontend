'use client';
import { useNavMenu } from '@/app/providers/NavMenuProvider';
import { useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavMenu.module.scss';
import { IDictionaries } from '@/app/i18n';

interface INavMenuProps {
	className?: string;
	translations?: IDictionaries;
}

export const NavMenu = ({ className, translations }: INavMenuProps) => {
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
		<nav className={classNames(cls.root, {}, [className])}>
			<ul
				className={classNames(cls['nav-links-list'], {
					[cls.active]: isVisible,
				})}
			>
				{navMenu?.map((link, index) => (
					<li key={index + link} className={cls['nav-link']}>
						{link}
					</li>
				))}
			</ul>
		</nav>
	) : null;
};
