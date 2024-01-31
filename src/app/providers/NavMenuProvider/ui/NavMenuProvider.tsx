'use client';
import { FC, ReactNode, useState } from 'react';
import { NavMenuContext } from '../context/NavMenuContext';

interface IVisibleProvider {
	children: ReactNode;
}

export const NavMenuProvider: FC<IVisibleProvider> = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);

	const defaultValue = {
		isVisible,
		setIsVisible,
	};
	return <NavMenuContext.Provider value={defaultValue}>{children}</NavMenuContext.Provider>;
};
