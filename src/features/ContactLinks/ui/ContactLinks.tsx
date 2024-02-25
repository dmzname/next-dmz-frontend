import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ContactLinks.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import Telegram from '@/shared/assets/icons/telegram.svg';
import Mail from '@/shared/assets/icons/mail.svg';
import Hub from '@/shared/assets/icons/github.svg';
import { usePopUp } from '@/app/providers/PopUpProvider';

interface IContactsMeProps {
	className?: string;
	text?: string;
}

export const ContactLinks = ({ className, text }: IContactsMeProps) => {
	const { isShowPopUp } = usePopUp();
	return (
		<div className={classNames(cls.root, {}, [className])}>
			<p>{text}</p>
			<a href="https://t.me/dmzname" target="_blank">
				<Telegram />
			</a>
			<Button theme={ButtonTheme.CLEAR} onClick={isShowPopUp}>
				<Mail />
			</Button>
			<a href="https://github.com/dmzname" target="_blank">
				<Hub />
			</a>
		</div>
	);
};
