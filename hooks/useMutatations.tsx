/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';
import {type PostAdd, type PostType} from '@/types/type';
import {type QueryClient, useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {useRouter} from 'next/navigation';

// Неправильное использование queryClient.invalidateQueries
export const FunDeletePost = (deletePostId: number, queryClient: QueryClient) => {
	const route = useRouter();
	const {mutate: deletePost} = useMutation({
		mutationFn: async () => axios.get(`http://localhost:8000/delpost/${deletePostId}`),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onSuccess() {
			queryClient.invalidateQueries({queryKey: ['todos']});
			route.push('/');
			route.refresh();
		},
	});
	return deletePost;
};

export const useChangePost = (changeContentValue: PostType, queryClient: QueryClient) => {
	const route = useRouter();
	const {mutate: changePost} = useMutation({
		mutationFn: async () => axios.patch(`http://localhost:8000/updatepost/${changeContentValue.Id}`, changeContentValue),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onSuccess() {
			queryClient.invalidateQueries({queryKey: ['todos']});
			route.push('/');
			route.refresh();
		},
	});
	return changePost;
};

export const useAddPost = (contentValue: PostAdd, queryClient: QueryClient) => {
	const route = useRouter();
	const {mutate: addPost} = useMutation({
		mutationFn: async () => axios.post('http://localhost:8000/createpost/', contentValue),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onSuccess() {
			queryClient.invalidateQueries({queryKey: ['todos']});
			route.push('/');
			route.refresh();
		},
	});
	return addPost;
};

