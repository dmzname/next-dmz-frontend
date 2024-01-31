import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';
import { ButtonTheme } from '../types/ButtonTypes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	disabled?: boolean;
	children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const { className, children, theme = ButtonTheme.PRIMARY, disabled, ...otherProps } = props;

	const mods: Mods = {};

	return (
		<button
			type="button"
			disabled={disabled}
			className={classNames(cls.root, mods, [cls[theme], className])}
			{...otherProps}
		>
			{children}
		</button>
	);
});
