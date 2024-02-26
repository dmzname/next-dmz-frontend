'use client';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeroBlock.module.scss';
import { WelcomeSvg } from './WelcomeSvg/WelcomeSvg';
import { Button } from '@/shared/ui/Button';
import { ContactLinks } from '@/features/ContactLinks';
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
				<a
					target="_blank"
					href="/zabelin_dmitry.pdf"
					className={classNames(cls['hero-btn'], {}, [cls['hero-btn-two']])}
				>
					{info?.buttonTwo}
				</a>
				<ContactLinks text={info?.contactMe} />
			</div>
			<HeroImage />
		</div>
	);
};
