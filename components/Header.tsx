/* eslint-disable @typescript-eslint/no-inferrable-types */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import styles from '@/app/page.module.scss';
import Logo from '@/img/Logo.svg';
import Image from 'next/image';
import {ModalWindow} from './Modal';
import {useCallback, useState} from 'react';
import {ModalWindow2} from './Modal2';
import Site from '@/img/Site.svg';
import Telegram from '@/img/Telegram.svg';
import Vk from '@/img/Vk.svg';
import Link from 'next/link';
const Header = (): JSX.Element => {
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

	const handlePasswordCorrectChange = useCallback((newValue: boolean) => {
		setIsPasswordCorrect(newValue);
	}, []);
	const width: number = 40;
	const height: number = 40;
	return (
		<header className={styles.header}>
			<Image src={Logo} alt='Logo' width={100} height={100} />
			<h1>Аношка</h1>
			<div className={styles.menu}>
				<Link href='/'><Image src={Site} alt='Site' width={width} height={height} /></Link>
				<Link href='/'><Image src={Telegram} alt='Telegram' width={width} height={height} /></Link>
				<Link href='/'><Image src={Vk} alt='Vk' width={width} height={height} /></Link>
				{isPasswordCorrect ? <ModalWindow2/> : <ModalWindow onPasswordCorrectChange={handlePasswordCorrectChange}/>}
			</div>

		</header>
	);
};

export {Header};
