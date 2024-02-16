'use client';
import { PopUp } from '@/shared/ui/PopUp';
import { usePopUp } from '@/app/providers/PopUpProvider';

interface ICallBackPopUpProps {
	className?: string;
}

export const CallBackPopUp = ({ className }: ICallBackPopUpProps) => {
	const { isClosePopUp, isVisible } = usePopUp();
	return (
		<PopUp isOpen={isVisible} onClose={isClosePopUp}>
			<div>IN PROCESS</div>
		</PopUp>
	);
};
