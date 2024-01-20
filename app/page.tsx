
import {Post} from '@/components/Post';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Главная страница</h1>
			<div className={styles.line}></div>
			<div className={styles.container}>
				<Post/>
			</div>
		</main>
	);
}
