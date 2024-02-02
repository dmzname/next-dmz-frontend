'use client';
import cls from './Hamburger.module.scss';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useNavMenu } from '@/app/providers/NavMenuProvider';

interface IHamburgerProps {
	className?: string;
}

export const Hamburger = ({ className }: IHamburgerProps) => {
	const [isActive, setIsActive] = useState(false);
	const { toggleNavMenu } = useNavMenu();

	const handleClick = () => {
		toggleNavMenu();
		setIsActive(!isActive);
	};

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.root, { [cls.active]: isActive }, [className])}
			onClick={handleClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</Button>
	);
};
