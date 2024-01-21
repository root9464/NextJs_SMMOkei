
import styles from '@/app/page.module.scss';
import {type PostType} from '@/types/type';

const Post = ({posts}: {posts: PostType[]}): JSX.Element => {
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
};

export {Post};

