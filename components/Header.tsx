
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import styles from '@/app/page.module.scss';
import Logo from '@/img/Logo.svg';
import Image from 'next/image';
import {ModalWindow} from './Modal';
import {useCallback, useState} from 'react';
import {ModalWindow2} from './Modal2';
import {usePersonStore} from '@/components/state';
const Header = (): JSX.Element => {
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

	const handlePasswordCorrectChange = useCallback((newValue: boolean) => {
		setIsPasswordCorrect(newValue);
	}, []);

	return (
		<header className={styles.header}>
			<Image src={Logo} alt='Logo' width={100} height={100} />
			<h1>Аношка</h1>
			<div className={styles.menu}>
				<a href='/'>Главная</a>
				<a href='/about'>О нас</a>
				<a href='/contact'>Контакты</a>
				{isPasswordCorrect ? <ModalWindow2/> : <ModalWindow onPasswordCorrectChange={handlePasswordCorrectChange}/>}
			</div>

		</header>
	);
};

export {Header};
