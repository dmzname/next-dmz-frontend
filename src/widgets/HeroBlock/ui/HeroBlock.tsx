'use client';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeroBlock.module.scss';
import { WelcomeSvg } from './WelcomeSvg/WelcomeSvg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ContactsMe } from '@/features/ContactsMe';
import { HeroImage } from './HeroImage/HeroImage';

interface IInfoHeroBlock {
	title: string;
	descriptionOne: string;
	descriptionTwo: string;
	buttonOne: string;
	buttonTwo: string;
	contactMe: string;
}

interface IHeroBlockProps {
	className?: string;
	info?: IInfoHeroBlock;
}

export const HeroBlock = ({ className, info }: IHeroBlockProps) => {
	return (
		<div className={classNames(cls.root, {}, [className])}>
			<div className={cls['hero-info']}>
				<WelcomeSvg />
				<h1 className={cls['hero-title']}>{info?.title}</h1>
				<p className={classNames(cls['hero-description'], {}, [cls['hero-description-one']])}>{info?.descriptionOne}</p>
				<p className={classNames(cls['hero-description'], {}, [cls['hero-description-two']])}>{info?.descriptionTwo}</p>
				<Button disabled className={classNames(cls['hero-btn'], {}, [cls['hero-btn-one']])}>
					{info?.buttonOne}
				</Button>
				<Button disabled className={classNames(cls['hero-btn'], {}, [cls['hero-btn-two']])} theme={ButtonTheme.OUTLINE}>
					{info?.buttonTwo}
				</Button>
				<ContactsMe text={info?.contactMe} />
			</div>
			<HeroImage />
			{/*<Decor2 className={cls.decor2} />*/}
		</div>
	);
};
