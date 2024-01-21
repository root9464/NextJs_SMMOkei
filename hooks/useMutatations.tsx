'use client';
import {type PostAdd, type PostType} from '@/types/type';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {useRouter} from 'next/navigation';

export const FunDeletePost = (deletePostId: number) => {
	const route = useRouter();
	const {mutate: deletePost} = useMutation({
		mutationFn: async () => axios.get(`http://localhost:8000/delpost/${deletePostId}`),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onSuccess() {
			route.push('/');
			route.refresh();
		},
	});
	return deletePost;
};

export const useChangePost = (changeContentValue: PostType) => {
	const route = useRouter();
	const {mutate: changePost} = useMutation({
		mutationFn: async () => axios.patch(`http://localhost:8000/updatepost/${changeContentValue.Id}`, changeContentValue),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onSuccess() {
			route.push('/');
			route.refresh();
		},
	});
	return changePost;
};

export const useAddPost = (contentValue: PostAdd) => {
	const route = useRouter();
	const {mutate: addPost} = useMutation({
		mutationFn: async () => axios.post('http://localhost:8000/createpost/', contentValue),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onSuccess() {
			route.push('/');
			route.refresh();
		},
	});
	return addPost;
};

