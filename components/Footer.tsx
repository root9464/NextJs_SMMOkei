/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styles from '@/app/page.module.scss';
import Image from 'next/image';
import LogoPtW from '@/img/LogoPtw.svg';
const Footer = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<Image src={LogoPtW} alt='Logo' width={10} height={10} />
			<p>Сделано командой Pay to Win</p>
		</footer>
	);
};

export {Footer};
