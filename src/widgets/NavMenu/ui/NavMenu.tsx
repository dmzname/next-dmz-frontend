'use client';
import { useNavMenu } from '@/app/providers/NavMenuProvider';
import { useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavMenu.module.scss';

interface INavMenuProps {
	className?: string;
	list: string[];
}

export const NavMenu = ({ className, list }: INavMenuProps) => {
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
					[cls.active]: true,
				})}
			>
				{list.map((link, index) => (
					<li key={index + link} className={cls['nav-link']}>
						{link}
					</li>
				))}
			</ul>
		</nav>
	) : null;
};
