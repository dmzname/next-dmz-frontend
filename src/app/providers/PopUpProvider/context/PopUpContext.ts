'use client';
import { createContext } from 'react';

export interface IPopupContextProps {
	isVisible?: boolean;
	setIsVisible?: (isVisible: boolean) => void;
}

export const PopUpContext = createContext<IPopupContextProps>({});
