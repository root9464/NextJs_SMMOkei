
/* eslint-disable @typescript-eslint/semi */

/* eslint-disable new-cap */

/* eslint-disable no-alert */

/* eslint-disable @typescript-eslint/no-unsafe-call */

'use client';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Tabs, Tab, Textarea} from '@nextui-org/react';
import styles from '@/app/page.module.scss';
import {useEffect, useState} from 'react';
import {type PostAdd, type PostType} from '@/types/type';
import {FunDeletePost, useAddPost, useChangePost} from '@/hooks/useMutatations';
const ModalWindow2 = () => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [deletePostId, setDeletePostId] = useState<number>(0); // Состояние для удаления поста

	const [inputValue, setInputValue] = useState<string>('');
	const [titleValue, setTitleValue] = useState<string>('');
	const [contentValue, setContentValue] = useState<PostAdd>({} as PostAdd);
	const [changeContentValue, setChangeContentValue] = useState<PostType>({} as PostType);
	useEffect(() => {
		setContentValue({Title: titleValue, Content: inputValue});
	}, [inputValue, titleValue]);

	useEffect(() => {
		setChangeContentValue({Id: deletePostId, Title:titleValue, Content: inputValue});
	}, [inputValue, titleValue, deletePostId]);

	const handleInputChange = (event: {target: {value: string}}) => {
		const newValue = event.target.value;
		if (newValue.length <= 320) {
			setTitleValue(newValue);
		} else {
			alert('Превышение лимита в 10 символов');
			setTitleValue(newValue.slice(0, 320));
		}
	};

	const deletePost = FunDeletePost(deletePostId);
	const changePost = useChangePost(changeContentValue);
	const addPost = useAddPost(contentValue);
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
												onChange={(event: {target: {value: string}}) => {
													setDeletePostId(parseInt(event.target.value, 10));
												}}
											/>
											<ModalFooter>
												<Button color='danger' variant='light' onPress={onClose}>Закрыть</Button>
												<Button color='primary' type='submit' onClick={(e: any) => {
													e.preventDefault();
													deletePost()
													onClose();
												}}>Удалить</Button>
											</ModalFooter>
										</Tab>
										<Tab key='music' title='Изменение'>
											<div className='flex flex-col gap-2'>
												<Input
													type='number'
													label='Id поста для изменения'
													variant='bordered'
													className='mb-2 max-w-xs'
													onChange={(event: {target: {value: string}}) => {
														setDeletePostId(parseInt(event.target.value, 10));
													}}
												/>
												<Input
													type='text'
													label='Заголовок поста'
													variant='bordered'
													className='mb-2 max-w-xs'
													onChange={(event: {target: {value: string}}) => {
														setInputValue(event.target.value);
													}}
												/>
											</div>
											<Textarea
												label='Текст поста'
												variant='bordered'
												placeholder='Введите информацию о посте'
												disableAnimation
												disableAutosize
												value={titleValue}
												onChange={handleInputChange}
												classNames={{
													base: 'max-w-xs',
													input: 'resize-y min-h-[40px]',
												}}
											/>
											<ModalFooter>
												<Button color='danger' variant='light' onPress={onClose}>Закрыть</Button>
												<Button color='primary' type='submit' onClick={(e: any) => {
													e.preventDefault();
													changePost();
													onClose();
												}}>Добавить</Button>
											</ModalFooter>
										</Tab>
										<Tab key='addpost' title='Добавить'>

											<Input
												type='text'
												label='Заголовок поста'
												variant='bordered'
												className='mb-2 max-w-xs'
												onChange={(event: {target: {value: string}}) => {
													setInputValue(event.target.value);
												}}
											/>

											<Textarea
												label='Текст поста'
												variant='bordered'
												placeholder='Введите информацию о посте'
												disableAnimation
												disableAutosize
												value={titleValue}
												onChange={handleInputChange}
												classNames={{
													base: 'max-w-xs',
													input: 'resize-y min-h-[40px]',
												}}
											/>
											<ModalFooter>
												<Button color='danger' variant='light' onPress={onClose}>Закрыть</Button>
												<Button color='primary' type='submit' onClick={(e: any) => {
													e.preventDefault();
													addPost();
													onClose();
												}}>Добавить</Button>
											</ModalFooter>
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
