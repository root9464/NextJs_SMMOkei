/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

'use client';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Tabs, Tab, Card, CardBody} from '@nextui-org/react';
import styles from '@/app/page.module.scss';
import {useState} from 'react';
import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';

const ModalWindow2 = () => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [deletePostId, setDeletePostId] = useState<number>();
	const route = useRouter();
	const {mutate: deletePost} = useMutation({
		mutationFn: async () => axios.get(`http://localhost:8000/delpost/${deletePostId}`),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onMutate() {
			route.push('/');
			route.refresh();
		},
	});

	const {mutate: changePost} = useMutation({
		mutationFn: async () => axios.get(`http://localhost:8000/changepost/${deletePostId}`),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onMutate() {
			route.push('/');
			route.refresh();
		},
	});
	return (
		<>
			<Button onPress={onOpen} className={styles.button}>Панель</Button>
			<Modal
				backdrop='opaque'
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent className={styles.modalbody}>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Панель управления</ModalHeader>
							<ModalBody>
								<div>
									<Tabs variant='bordered' aria-label='Tabs variants'>
										<Tab key='photos' title='Удаление'>
											<Input
												type='number'
												label='Id поста которого вы хотите удалить'
												variant='bordered'
												onChange={(e: any) => {
													setDeletePostId(e.target.value);
												}}
											/>
											<ModalFooter>
												<Button color='danger' variant='light' onPress={onClose}>Закрыть</Button>
												<Button color='primary' type='submit' onClick={(e: any) => {
													e.preventDefault();
													onClose();
													deletePost();
												}}>Войти</Button>
											</ModalFooter>
										</Tab>
										<Tab key='music' title='Изменение'>

										</Tab>
									</Tabs>
								</div>
							</ModalBody>

						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export {ModalWindow2};
