import styles from './Card.module.scss';

const Card = (props) => {
	return (
		<li className={styles.card}>
			{props.title}
			<button className={styles.btnFavorite}>
				<i className='fa fa-star-o' />
			</button>
		</li>
	);
};

export default Card;
