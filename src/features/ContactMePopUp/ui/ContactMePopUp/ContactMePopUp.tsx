'use client';
import { PopUp } from '@/shared/ui/PopUp';
import { usePopUp } from '@/app/providers/PopUpProvider';
import { IDictionaries } from '@/app/i18n';
import { ContactMeForm } from '@/features/ContactMePopUp/ui/ContactMeForm/ContactMeForm';

interface ICallBackPopUpProps {
	className?: string;
	translations?: IDictionaries;
}

export const ContactMePopUp = ({ className, translations }: ICallBackPopUpProps) => {
	const { isClosePopUp, isVisible } = usePopUp();

	return (
		<PopUp isOpen={isVisible} onClose={isClosePopUp}>
			<ContactMeForm translations={translations} />
		</PopUp>
	);
};
