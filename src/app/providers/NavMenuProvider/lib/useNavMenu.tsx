import { useContext } from 'react';
import { NavMenuContext } from '../context/NavMenuContext';

interface IUseNavMenu {
	toggleNavMenu: () => void;
	isVisible: boolean;
}

export function useNavMenu(): IUseNavMenu {
	const { isVisible = false, setIsVisible } = useContext(NavMenuContext);

	const toggleNavMenu = () => {
		document.body.style.overflow = !isVisible ? 'hidden' : '';
		setIsVisible?.(!isVisible);
	};

	return { isVisible, toggleNavMenu };
}
