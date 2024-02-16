import { useContext } from 'react';
import { PopUpContext } from '../context/PopUpContext';

interface IPopUp {
	isShowPopUp: () => void;
	isClosePopUp: () => void;
	isVisible: boolean;
}

export function usePopUp(): IPopUp {
	const { isVisible = false, setIsVisible } = useContext(PopUpContext);

	const isShowPopUp = () => {
		document.body.style.overflow = 'hidden';
		setIsVisible?.(true);
	};

	const isClosePopUp = () => {
		document.body.style.overflow = '';
		setIsVisible?.(false);
	};

	return { isVisible, isShowPopUp, isClosePopUp };
}
