/* eslint-disable react/display-name */

/* eslint-disable @typescript-eslint/no-unsafe-argument */

'use client';
import axios from 'axios';
import {useEffect, useState, memo} from 'react';
import {type PostType} from '@/types/type';
import {Post} from './Post';

export const RenderPost = memo(() => {
	const [posts, setPost] = useState<PostType[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:8000/allposts');
				setPost(response.data);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		void fetchData();
	}, []);

	return (
		<Post posts={posts} />

	);
});

