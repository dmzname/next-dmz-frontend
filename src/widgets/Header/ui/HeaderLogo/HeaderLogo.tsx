import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderLogo.module.scss';
import Logo from '@/shared/assets/images/dmz_logo.svg';

interface IHeaderLogoProps {
	className?: string;
}

export const HeaderLogo = ({ className }: IHeaderLogoProps) => {
	return (
		<a className={classNames(cls.root, {}, [className])}>
			<Logo />
			<span>Dmitro Zabelin</span>
		</a>
	);
};
