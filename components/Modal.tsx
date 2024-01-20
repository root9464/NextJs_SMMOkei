
/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from '@nextui-org/react';
import styles from '@/app/page.module.scss';
import {createClient} from '@supabase/supabase-js';
import {useState, useEffect} from 'react';
import {type User, type ChildComponentProps} from '@/types/type';

const ModalWindow = ({onPasswordCorrectChange}: ChildComponentProps) => {
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	useEffect(() => {
		onPasswordCorrectChange(isPasswordValid);
		localStorage.setItem('isPasswordCorrect', JSON.stringify(isPasswordValid)); // Опа пошел говнокод спустя 4 часа
	}, [isPasswordValid, onPasswordCorrectChange]);
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const supabaseUrl = 'https://fjfcexhrmlodechtmjxu.supabase.co';
	const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZmNleGhybWxvZGVjaHRtanh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTE3OTE0MiwiZXhwIjoyMDIwNzU1MTQyfQ.-v2rWXJOEA0bGqWW6NFtybpQ4wAvdsnrrH4Tabe8Xrg';
	const supabase = createClient(supabaseUrl, supabaseKey);
	const [userData, setUserData] = useState<User[]>([]);

	const fetchData = async () => {
		const {data, error} = await supabase
			.from('users')
			.select('*')
			.order('id')
			.range(0, 1);
		if (error) {
		// Обработка ошибки
		} else {
			setUserData(data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [password, setPassword] = useState<string>('');

	const checkPassword = () => {
		userData.forEach(element => {
			if (element.password === password) {
				setIsPasswordValid(true);
			} else {
				console.log(false);
			}
		});
	};

	return (
		<>
			<Button onPress={onOpen} className={styles.button}>Dashboard</Button>
			<Modal
				backdrop='opaque'
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent className={styles.modalbody}>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Админ панель</ModalHeader>
							<ModalBody>
								<Input type='password' label='Пароль для входа' onChange={e => {
									setPassword(e.target.value);
								}}/>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>Закрыть</Button>
								<Button color='primary' type='submit' onClick={(e: any) => {
									e.preventDefault();
									checkPassword();
								}}>Войти</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export {ModalWindow};
