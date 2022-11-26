import styles from './Container.module.scss';
import shortid from 'shortid';

const Container = (props) => {
	return (
		<div className={styles.container} key={shortid()}>
			{props.children}
		</div>
	);
};

export default Container;
