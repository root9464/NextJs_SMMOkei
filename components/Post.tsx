
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';
import styles from '@/app/page.module.scss';
import axios from 'axios';
import {useEffect, useState, memo} from 'react';
import {type PostType} from '@/types/type';

const Post = memo((): JSX.Element => {
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

		fetchData();
	}, []);

	return (
		<>
			{
				posts.sort((a, b) => b.Content.length - a.Content.length).map((post: PostType) => (
					<div key={post.Id} className={styles.post}>
						<h1>{post.Title}</h1>
						<p className={styles.p}>{post.Content}</p>
					</div>
				))
			}
		</>
	);
});

export {Post};
