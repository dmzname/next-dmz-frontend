import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ContactsMe.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import Telegram from '@/shared/assets/icons/telegram.svg';
import Mail from '@/shared/assets/icons/mail.svg';
import Hub from '@/shared/assets/icons/github.svg';

interface IContactsMeProps {
	className?: string;
}

export const ContactsMe = ({ className }: IContactsMeProps) => {
	return (
		<div className={classNames(cls.root, {}, [className])}>
			<p>свяжитесь со мной</p>
			<a href="https://t.me/dmzname" target="_blank">
				<Telegram />
			</a>
			<Button theme={ButtonTheme.CLEAR} disabled>
				<Mail />
			</Button>
			<a href="https://github.com/dmzname" target="_blank">
				<Hub />
			</a>
		</div>
	);
};
