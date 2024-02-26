import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PopUp.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CloseBtn from '@/shared/assets/icons/close.svg';

const ANIMATION_DELAY = 300;

interface IPopUpProps {
	children?: ReactNode;
	className?: string;
	isOpen: boolean;
	onClose: () => void;
	lazy?: boolean;
}

export const PopUp = (props: IPopUpProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const { className, children, onClose, isOpen, lazy } = props;

	const mods: Record<string, boolean> = {
		[cls['is-open']]: isOpen,
		[cls['is-close']]: isClosing,
	};

	const onCloseHandler = useCallback(() => {
		setIsClosing(true);
		if (onClose) {
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onCloseHandler();
			}
		},
		[onCloseHandler],
	);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			window.removeEventListener('keydown', onKeyDown);
			clearTimeout(timerRef.current);
		};
	}, [isOpen, onKeyDown]);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<div onClick={onCloseHandler} className={classNames(cls.root, mods, [className, cls.overlay, 'modal'])}>
			<div className={cls.content} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
				<Button theme={ButtonTheme.CLEAR} className={cls['close-btn']} onClick={onCloseHandler}>
					<CloseBtn />
				</Button>
				{children}
			</div>
		</div>
	);
};
