
import {Post} from '@/components/Post';
import styles from './page.module.scss';
import {RenderPost} from '@/components/RenderPost';
export default async function Home() {
	return (
		<main className={styles.main}>
			<h1>Посты ОКЭИ</h1>
			<div className={styles.line}></div>
			<div className={styles.container}>
				<RenderPost />
			</div>
		</main>
	);
}
