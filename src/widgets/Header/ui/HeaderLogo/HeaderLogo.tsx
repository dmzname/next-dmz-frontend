import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderLogo.module.scss';
import Logo from '@/shared/assets/images/dmz_logo.svg';
import Link from 'next/link';

interface IHeaderLogoProps {
	className?: string;
}

export const HeaderLogo = ({ className }: IHeaderLogoProps) => {
	return (
		<Link href={'/'} className={classNames(cls.root, {}, [className])}>
			<Logo />
			<span>Dm.Zabelin</span>
		</Link>
	);
};
