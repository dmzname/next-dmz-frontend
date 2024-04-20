'use client';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeroBlock.module.scss';
import { WelcomeSvg } from './WelcomeSvg/WelcomeSvg';
import { Button } from '@/shared/ui/Button';
import { ContactLinks } from '@/features/ContactLinks';
import { HeroImage } from './HeroImage/HeroImage';
import Link from 'next/link';
import { Locale } from '@/app/i18n';
import { usePopUp } from '@/app/providers/PopUpProvider';

interface IInfoHeroBlock {
	title: string;
	descriptionOne: string;
	descriptionTwo: string;
	descriptionThree: string;
	buttonOne: string;
	buttonTwo: string;
}

interface IHeroBlockProps {
	className?: string;
	info?: IInfoHeroBlock;
	lang?: Locale;
}

export const HeroBlock = ({ className, info, lang }: IHeroBlockProps) => {
	const { isShowPopUp } = usePopUp();

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<div className={cls['root-layout']}>
				<div className={cls['hero-info']}>
					<WelcomeSvg />
					<h1 className={cls['hero-title']}>{info?.title}</h1>
					<p className={classNames(cls['hero-description'], {}, [cls['hero-description-one']])}
						 dangerouslySetInnerHTML={{ __html: info?.descriptionOne || '' }} />
					<p
						className={classNames(cls['hero-description'], {}, [cls['hero-description-two']])}>{info?.descriptionTwo}</p>
					<p
						className={classNames(cls['hero-description'], {}, [cls['hero-description-three']])}>{info?.descriptionThree}</p>
					<Link href={`/${lang}/portfolio`} className={classNames(cls['hero-btn'], {}, [cls['hero-btn-one']])}>
						{info?.buttonOne}
					</Link>
					<Button className={classNames(cls['hero-btn'], {}, [cls['hero-btn-two']])} onClick={isShowPopUp}>
						{info?.buttonTwo}
					</Button>
				</div>
				<HeroImage />
			</div>
			<ContactLinks className={cls['contacts-me']} />
		</div>
	);
};
