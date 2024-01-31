'use client';
import { createContext } from 'react';

export interface INavMenuContextProps {
	isVisible?: boolean;
	setIsVisible?: (isVisible: boolean) => void;
}

export const NavMenuContext = createContext<INavMenuContextProps>({});
