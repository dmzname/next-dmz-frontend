'use client';
import { FC, ReactNode, useState } from 'react';
import { PopUpContext } from '../context/PopUpContext';

interface IPopUpProvider {
	children: ReactNode;
}

export const PopUpProvider: FC<IPopUpProvider> = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);

	const defaultValue = {
		isVisible,
		setIsVisible,
	};
	return <PopUpContext.Provider value={defaultValue}>{children}</PopUpContext.Provider>;
};
