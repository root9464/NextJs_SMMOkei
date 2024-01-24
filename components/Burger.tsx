/* eslint-disable @typescript-eslint/no-inferrable-types */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-alert */
'use client';
import styles from '@/app/page.module.scss';
import Telegram from '@/img/Telegram.svg';
import Vk from '@/img/Vk.svg';
import Image from 'next/image';
import Link from 'next/link';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from '@nextui-org/react';
import Site from '@/img/Site.svg';

const Burger = () => {
	const width: number = 40;
	const height: number = 40;
	return (
		<Dropdown className={styles.bc}>

			<DropdownTrigger className={styles.burger}>
				<Button variant='bordered'>Меню</Button>
			</DropdownTrigger>

			<DropdownMenu
				aria-label='Action event example'
				onAction={key => {
					alert(key);
				}}

			>
				<DropdownItem key='new'>
					<Link className='flex flex-row text-center items-center text-lg gap-2' href='/'>
						<Image src={Site} alt='Site' width={width} height={height} /> ОКЭИ
					</Link>
				</DropdownItem>
				<DropdownItem key='new'>
					<Link className='flex flex-row text-center items-center text-lg gap-2' href='/'>
						<Image src={Vk} alt='Site' width={width} height={height} /> Вк паблик
					</Link>
				</DropdownItem>
				<DropdownItem key='new'>
					<Link className='flex flex-row text-center items-center text-lg gap-2' href='/'>
						<Image src={Telegram} alt='Site' width={width} height={height} /> Телеграм группа
					</Link>
				</DropdownItem>

			</DropdownMenu>
		</Dropdown>
	);
};

export {Burger};
